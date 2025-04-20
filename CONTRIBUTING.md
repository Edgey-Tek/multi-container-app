# Contributing to Multi-Container App

Thank you for considering contributing to the Multi-Container App project! We appreciate your time and effort in helping us improve and grow this project. Please follow the guidelines below to ensure a smooth and efficient contribution process.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Setting Up the Development Environment](#setting-up-the-development-environment)
4. [Running Tests](#running-tests)
5. [Linting the Code](#linting-the-code)
6. [Writing and Submitting Pull Requests](#writing-and-submitting-pull-requests)
7. [Reporting Issues and Requesting New Features](#reporting-issues-and-requesting-new-features)

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it to understand the expectations for behavior and interactions within the community.

## Getting Started

To get started with contributing to the Multi-Container App project, follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your contribution.
4. Make your changes in the new branch.
5. Commit your changes with a meaningful commit message.
6. Push your changes to your forked repository.
7. Create a pull request (PR) from your forked repository to the main repository.

## Setting Up the Development Environment

To set up the development environment, follow these steps:

1. Ensure you have the following prerequisites installed:
   - [Node.js](https://nodejs.org/) (version 14 or higher)
   - [Docker](https://www.docker.com/)
   - [Docker Compose](https://docs.docker.com/compose/)

2. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/Edgey-Tek/multi-container-app.git
   cd multi-container-app
   ```

3. Install the dependencies:

   ```sh
   cd app
   npm install
   ```

4. Create a `.env` file in the root directory and add the necessary environment variables. Refer to the `.env.example` file for the required variables.

5. Start the application using Docker Compose:

   ```sh
   docker-compose up -d
   ```

6. Open your browser and navigate to `http://localhost:3000` to access the application.

## Running Tests

To run the automated tests, follow these steps:

1. Ensure you have the development environment set up as described above.
2. Run the tests using the following command:

   ```sh
   npm test
   ```

3. Review the test results and ensure all tests pass. If any tests fail, fix the issues and rerun the tests.

## Linting the Code

To lint the code and enforce coding standards, follow these steps:

1. Ensure you have the development environment set up as described above.
2. Run the linter using the following command:

   ```sh
   npm run lint
   ```

3. Review the linter results and fix any issues. Rerun the linter to ensure all issues are resolved.

## Writing and Submitting Pull Requests

When writing and submitting pull requests, please follow these guidelines:

1. Ensure your code follows the project's coding standards and passes all tests and linter checks.
2. Write clear and concise commit messages that describe the changes made.
3. Provide a detailed description of the changes in the pull request, including the purpose and any relevant context.
4. If your pull request addresses an existing issue, reference the issue number in the pull request description.
5. Request a code review from the project maintainers.
6. Address any feedback from the code review and make necessary changes.
7. Once the pull request is approved, it will be merged into the main branch.

## Reporting Issues and Requesting New Features

If you encounter any issues or have ideas for new features, please follow these steps:

1. Check the existing issues to see if the issue or feature request has already been reported.
2. If not, create a new issue with a clear and descriptive title.
3. Provide a detailed description of the issue or feature request, including any relevant context, steps to reproduce (if applicable), and expected behavior.
4. If you are able to work on the issue or feature request, please mention it in the issue description.

Thank you for contributing to the Multi-Container App project! Your contributions are greatly appreciated.
