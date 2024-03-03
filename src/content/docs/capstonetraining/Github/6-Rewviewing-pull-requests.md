---
title: "6. Reviewing Pull Requests"
---

# Reviewing Pull Requests

Reviewing pull requests is a critical component of the collaborative development process on GitHub.
It ensures the quality of contributions by checking for errors, conflicts, and ensuring consistency
with the project's goals. This guide will cover the essentials of reviewing different types of
submissions, including markdown files and code, and outline best practices for conducting thorough
reviews.

## Video example of reviewing Pull requests

[Watch the reviewing pull requests Video Tutorial](https://youtu.be/Z5cpNFpUt-0 "Reviewing Pull requests - Click to Watch!")

## Reviewing Markdown Files (MD)

When reviewing markdown (MD) files submitted by other contributors, such as documentation or project
READMEs, focus on the following:

- **Typos and Grammar**: Check for spelling mistakes, grammatical errors, and overall readability.
- **Completeness**: Ensure all necessary information is present and accurately described.
- **Formatting**: Verify that Markdown formatting is correctly used for headings, lists, code
  blocks, and links to maintain a clean and readable style.

During the review, you can:

- **Comment**: Provide feedback or ask questions directly on the lines of code or sections of the
  document.
- **Request Changes**: If you identify issues or areas for improvement, request changes from the PR
  owner.
- **Approve**: If the submission meets all criteria, approve the pull request for merging.

## Reviewing Code

Code reviews require a different approach to ensure functionality, maintainability, and integration
with existing code:

### Checking Out Branches for Review

To review and test the code thoroughly, it's best to run the changes on your local machine:

1. **Fetch the Branch**: Use `git fetch origin pull/ID/head:BRANCHNAME` to fetch the remote pull
   request branch, replacing `ID` with the pull request ID and `BRANCHNAME` with a name for the
   local branch.
2. **Checkout the Branch**: Switch to the fetched branch with `git checkout BRANCHNAME` to begin
   your review.

### Conducting the Review

- **Functionality**: Execute the code to ensure it works as expected and solves the intended problem
  without introducing new issues.
- **Code Quality**: Assess the code for readability, maintainability, and adherence to project
  standards and best practices.
- **Integration**: Verify that the changes do not negatively affect existing functionalities or lead
  to conflicts with the base branch.
- **Formatting**: Encourage consistency in coding style but beware of auto-formatting tools that
  might introduce unnecessary changes, complicating the review process.

### Providing Constructive Feedback

- **Be Specific**: Reference specific lines of code and suggest improvements or ask clarifying
  questions.
- **Be Kind**: Offer feedback in a constructive, positive manner to encourage collaboration.
- **Offer Solutions**: Whenever possible, provide solutions or alternatives to problems you
  identify.

### Finalizing the Review

- **Approval**: Approve the pull request once all criteria are met and any requested changes have
  been satisfactorily addressed.
- **Follow-Up**: If necessary, engage in further discussion or review follow-up commits to ensure
  all concerns have been resolved.

## Conclusion

A thorough and thoughtful review process is key to maintaining the quality and integrity of any
project. By carefully reviewing markdown files for content accuracy and code for functionality and
style, you contribute to the project's success and foster a collaborative and respectful development
environment.
