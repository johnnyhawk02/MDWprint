# Git & GitHub Push Instructions

This repository is version-controlled with Git and structured into modular files (`index.html`, `styles.css`, `app.js`). Follow this guide to push updates to GitHub, manage branches, or restore previous versions.

---

## 1. Connecting & Pushing to GitHub

If you have created a repository on GitHub (e.g. `https://github.com/your-username/active-sefton-slip-printer.git`):

### First Time Push
1. Open your terminal in the project root directory.
2. Check your git status and commit history:
   ```bash
   git status
   git log --oneline
   ```
3. Set your GitHub repository as the remote origin (replace with your repository URL):
   ```bash
   git remote add origin https://github.com/<your-username>/active-sefton-slip-printer.git
   ```
4. Rename branch to `main` (if desired) and push:
   ```bash
   git branch -M main
   git push -u origin main
   ```

---

## 2. Regular Update Workflow

Whenever you modify templates in `app.js`, styles in `styles.css`, or layouts in `index.html`:

```bash
# 1. Check which files were changed
git status

# 2. Stage all modifications
git add .

# 3. Commit with a meaningful message
git commit -m "Update prices: Youth category to 11-15yrs"

# 4. Push to GitHub
git push
```

---

## 3. How Rollbacks Work

Because Git tracks every commit in the workspace, you can safely revert changes if anything breaks:

### Quick Rollback of Uncommitted Changes
To discard all local edits and restore the last committed state:
```bash
git reset --hard HEAD
```

### Roll Back to Pre-Refactor State
A complete snapshot of the original monolithic `index.html` is preserved as `index.html.bak` and committed in the Git history:
```bash
# Restore index.html from the backup file:
cp index.html.bak index.html

# Or checkout the initial commit:
git checkout e54f765 -- index.html
```

### Inspecting History
To view the full history of revisions:
```bash
git log --oneline -n 10
```
