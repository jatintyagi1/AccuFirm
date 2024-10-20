## Getting Started

#### Step  1: Clone the Repository

```bash
git clone https://github.com/jatintyagi1/AccuFirm.git
```

```bash
cd AccuFirm
```

#### Step 2: Create Your MongoDb account and Database Cluster

- Create your own MongoDB account by visiting the MongoDB website and signing up for a new account.
- Create a new database or cluster by following the instructions provided in the MongoDB documentation. Remember to note down the "Connect to your application URI" for  
  the database, as you will need it later. Also, make sure to change <password> with your own password
- add your current IP address to the MongoDB database's IP whitelist to allow connections (this is needed whenever your ip changes)


#### Step 3: Edit Environment Variable

- Check a file named .env in the /backend directory.
  This file will store environment variables for the project to run.

#### Step 4: Update Mongodb URI
 


```bash
cd frontend
```

```bash
npm install
```

This command will install all the required packages specified in the package.json file

#### Step 3: Start the Frontend Server

```bash
npm start
```