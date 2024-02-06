---
title: "Commiting Code"
---
# Commiting Code

want to add changes to the file/s?

Once you have modified or added files you need to add them to your commit history so that Git knows what changes to submit. to do this type `git add <fileName>` in your VS code terminal.

### Getting the current status
At any time on your local machine you can check the status of your changes using the command `git status`. This will tell you what changes have been made since the last commit. This is handy if you’re multitasking or get pulled away and need to remember where you’re at.

### Committing changes with a valid commit message: 
Why? It is important to write an accurate description of what you are committing to the repository, what has been changed/added/fixed? So that the person responsible for approving your file, knows what they are looking at specifically and what to test for before merging.

A brief description of code update eg: “updated code links to new file paths, navigation to links now functional again”
Or a new page has been created eg: “introduction to project README created for (specific repo) with instructions on how to use/navigate the repo for this project”

How: 
Enter `git commit -m "<commit message>" `
to save the changes to your local repository. 
You can enter anything for the commit message, but adding -m "[commit message]" specifies what this code change is doing, so it's helpful to be clear and concise. 

Please don’t be lazy with your commit messages, your tutors and your fellow students have to read these messages and make sense of them. “Added files” doesn’t tell us what you’ve changed!


### Pulling and Pushing changes: 
After you have made a pull (download) and have the most recent files, and made your changes, a push (upload) of the files will update the origin files to the ones changed or added by you for all to see on the live website (once approved).


How:
First pull in any changes from other team members on GitHub. Use the `git pull origin main` command to pull down any approved changes to the main repo. If you are working with colleagues on your branch you will also need to `git pull` which will update any changes to the current branch.
After this, enter `git push origin <branch name>` to save your code changes to GitHub. After the first upload which creates the branch on GitHub you can just use `git push`.
