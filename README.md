This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To integrate Xata on the Project:



Install the Xata CLI:

Shell
PowerShell
npm install -g @xata.io/cli

Once installed, authenticate the Xata CLI with your Xata account. If you don't already have an account, you can use the same workflow to sign up for a new account. Run the following command to begin the authentication workflow:

xata auth login
Once completed, the command will create a new API key for your user account, which you should see in the "Account Settings" page in the Xata UI. That key will also be stored locally on your computer (the location might vary for depending on your operating system). It looks like this:

# .config/xata/credentials
[default]
apiKey=YOUR_API_KEY_HERE

Create a new database
Once you have the Xata CLI installed, are logged in, and have set up a new Next JS application, you are ready to use the Xata CLI to generate a new database. Accept all the prompt defaults for the following command except for the region selection, where you should choose the region closest to your application users:

xata init

Define the database schema and import CSV data
You can use the Xata UI to manually define your schema and add data. However, for this guide, you'll use the Xata CLI and a CSV file to:

Auto-generate a schema based on column headings for names and data types inferred from the column values
Import data to the database by running this command:

xata import csv seed/blog-posts.csv --table Posts --create

Fetching data schema from the xata database:
xata pull main