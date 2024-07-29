# Salesforce CI/CD Pipeline

This repository contains a CI/CD pipeline for Salesforce projects using GitHub Actions. The pipeline is designed to automate the setup, build, and deployment process for Salesforce projects.


## Workflow Overview

The CI/CD pipeline is defined in the `.github/workflows/ci-cd-pipeline.yml` file. The workflow is triggered on push and pull request events to the `main` branch, and it can also be triggered manually from the Actions tab in GitHub.


# Getting Started

# Prerequisites

	•	A GitHub account
	•	Node.js and npm installed locally
	•	Salesforce CLI installed locally
	•	A Salesforce org for deployment



## Setup environment


make sure you have sales force account and enable API

if u don't have account make account here (developer eddition)

https://developer.salesforce.com/signup

download node locally using 
    ```sh
        nvm install 18.20.4
          nvm use 18.20.4
          node --version 


download salesforce cli using 
    ```sh
    npm install -g sfdx-cli
          sfdx -v

1. **Salesforce Authentication**

   To authenticate with Salesforce, you need to store your Salesforce authentication URL in a GitHub secret named `SALESFORCE_AUTH_URL`. You can generate this URL using the Salesforce CLI.

   ```sh
   sfdx force:org:display --verbose --json

Copy the sfdxAuthUrl from the output and add it to your GitHub secrets.

# Setting Up Secrets

	1.	Navigate to your GitHub repository.
	2.	Click on Settings.
	3.	In the sidebar, click on Secrets and variables > Actions.
	4.	Click the New repository secret button.
	5.	Add a new secret with the name SALESFORCE_AUTH_URL and the value being the content of your sfdx-url.txt file.




# Running the Pipeline

The pipeline is triggered automatically on push or pull request events to the main branch. You can also run the pipeline manually from the Actions tab in your GitHub repository.

Workflow Details

Setup Job

The setup job prepares the environment by:

	1.	Checking out the repository.
	2.	Caching npm dependencies to speed up the workflow.
	3.	Installing Node.js using nvm.
	4.	Installing the Salesforce CLI.
	5.	Authenticating with Salesforce using the provided secret.


