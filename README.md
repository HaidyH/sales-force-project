# sales-force-project


# Getting Started

# Prerequisites

	•	A GitHub account
	•	Node.js and npm installed locally
	•	Salesforce CLI installed locally
	•	A Salesforce org for deployment

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