# How to Push to GitHub Manually

Since you've opted to manage the repository manually, follow these steps to push your code to GitHub.

## Prerequisites

1.  **Git Installed**: Ensure you have Git installed on your local machine.
2.  **GitHub Account**: You need a GitHub account.
3.  **Create Repository**: Go to [GitHub](https://github.com/new) and create a new empty repository named `active-sefton-slip-printer` (or whatever you prefer). Do **not** initialize it with a README, .gitignore, or license.

## Steps

1.  **Download Code**: Download the project files to your local machine.
2.  **Open Terminal**: Open your terminal or command prompt and navigate to the project folder.
3.  **Initialize Git**:
    ```bash
    git init
    ```
4.  **Add Files**:
    ```bash
    git add .
    ```
5.  **Commit Changes**:
    ```bash
    git commit -m "Initial commit"
    ```
6.  **Add Remote**: Link your local repository to the GitHub repository you created. Replace `johnnyhawk02` with your GitHub username if different.
    ```bash
    git remote add origin https://github.com/johnnyhawk02/active-sefton-slip-printer.git
    ```
7.  **Push Code**:
    ```bash
    git branch -M main
    git push -u origin main
    ```

## Future Updates

Whenever you make changes:

1.  `git add .`
2.  `git commit -m "Description of changes"`
3.  `git push`
