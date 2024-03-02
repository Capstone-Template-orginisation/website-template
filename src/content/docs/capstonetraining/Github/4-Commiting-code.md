---
title: "4. Commiting Code"
---

# Mastering Code Commitment on GitHub

Committing code is a fundamental step in the version control process, allowing you to track the
evolution of your projects and collaborate effectively with others. This section will guide you
through adding changes to your commit history, crafting meaningful commit messages, and
synchronizing your changes with GitHub.

## Commiting Code Video Tutorial

A comprehensive video tutorial will soon be available to visually guide you through the process of
committing code on GitHub. This tutorial will provide step-by-step instructions to enhance your
understanding and ensure a smooth workflow.

## Preparing Your Changes

Before your changes can be recorded in your project's history, they must be staged. This process
involves selecting the modifications you wish to include in your next commit.

git add <fileName>

Replace `<fileName>` with the name of the file you've modified or use `.` to add all changes.


## Checking Your Current Status

It's easy to lose track of which changes have been staged for commit. Use the following command to
display your working directory's current state:

git status

This command will list staged changes, unstaged changes, and files that are not being tracked by
Git.

## Crafting a Meaningful Commit Message

Commit messages are crucial for understanding the history of your project. They should clearly
describe what was changed and why.

### Why It Matters:

- **Clarity**: A clear commit message helps reviewers understand the purpose of your changes.
- **Project History**: Well-crafted messages enhance the readability of your project's history.

### How to Commit:

git commit -m "Describe your changes here"

#### Example Messages:

- "Updated navigation links to reflect new file structure."
- "Added README.md for project setup instructions."

## Synchronizing Changes with GitHub

After committing your changes locally, you need to synchronize them with your GitHub repository.

### Pulling Changes:

To ensure your local repository is up to date, pull any changes made by others:

git pull origin main

### Pushing Your Changes:

Once your local repository is updated, push your changes to GitHub:

git push origin <branchName>

Replace `<branchName>` with the name of your branch. If you're pushing for the first time, this
command also creates the branch on GitHub.

## Conclusion

Understanding how to commit code and manage your changes is essential for effective collaboration on
GitHub. By following these guidelines, you can contribute to projects with confidence and clarity.
