import express from "express";
import { createServer as createViteServer } from "vite";
import { Octokit } from "octokit";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// GitHub CLI Client ID (Public)
const CLIENT_ID = "178c6fc778ccc68e1d6a"; 

// 1. Request Device Code
app.post('/api/github/device-code', async (req, res) => {
    try {
        const response = await fetch('https://github.com/login/device/code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                client_id: CLIENT_ID,
                scope: 'repo read:org'
            })
        });
        const data = await response.json();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// 2. Poll for Token
app.post('/api/github/poll-token', async (req, res) => {
    const { device_code } = req.body;
    try {
        const response = await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                client_id: CLIENT_ID,
                device_code: device_code,
                grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
            })
        });
        const data = await response.json();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// 3. Push Code
app.post('/api/github/push', async (req, res) => {
    const { token, owner = "johnnyhawk02", repoName = "MDWprint" } = req.body;

    if (!token) return res.status(401).json({ error: "Missing token" });

    const octokit = new Octokit({ auth: token });

    try {
        // Check if repo exists, create if not
        let repo;
        try {
            const { data } = await octokit.rest.repos.get({ owner, repo: repoName });
            repo = data;
        } catch (e: any) {
            if (e.status === 404) {
                // Try to create repo
                try {
                    const { data } = await octokit.rest.repos.createForAuthenticatedUser({
                        name: repoName,
                        description: "Active Sefton Slip Printer",
                        private: true
                    });
                    repo = data;
                } catch (createError: any) {
                    return res.status(500).json({ error: `Failed to create repo: ${createError.message}` });
                }
            } else {
                throw e;
            }
        }

        // Upload files
        const files = await getAllFiles(__dirname);
        const results = [];

        // Create Blobs
        for (const file of files) {
            const content = fs.readFileSync(file.absolutePath, 'utf-8');
            const relativePath = file.relativePath.replace(/\\/g, '/'); // Ensure forward slashes
            
            let sha;
            try {
                const { data } = await octokit.rest.repos.getContent({
                    owner,
                    repo: repoName,
                    path: relativePath
                });
                if (!Array.isArray(data)) {
                    sha = data.sha;
                }
            } catch (e) {}

            await octokit.rest.repos.createOrUpdateFileContents({
                owner,
                repo: repoName,
                path: relativePath,
                message: `Update ${relativePath}`,
                content: Buffer.from(content).toString('base64'),
                sha: sha
            });
            results.push(relativePath);
        }

        res.json({ success: true, repoUrl: repo.html_url, files: results });

    } catch (error: any) {
        console.error("Push error:", error);
        res.status(500).json({ error: error.message });
    }
});

async function getAllFiles(dir: string, baseDir: string = dir): Promise<{ absolutePath: string, relativePath: string }[]> {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    const files: { absolutePath: string, relativePath: string }[] = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relativePath = path.relative(baseDir, fullPath);

        if (entry.isDirectory()) {
            if (['node_modules', '.git', 'dist', '.next'].includes(entry.name)) continue;
            files.push(...await getAllFiles(fullPath, baseDir));
        } else {
            if (['.env', '.env.local', 'package-lock.json', 'yarn.lock', 'server.ts'].includes(entry.name)) continue;
            files.push({ absolutePath: fullPath, relativePath });
        }
    }
    return files;
}

async function startServer() {
    if (process.env.NODE_ENV !== "production") {
        const vite = await createViteServer({
            server: { middlewareMode: true },
            appType: "spa",
        });
        app.use(vite.middlewares);
    } else {
        app.use(express.static('dist'));
    }

    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

startServer();
