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

in .env file write 

```bash
MONGODB_URI="your-mongodb-uri"
PORT=5000
JWT_SECRET= "your_private_jwt_secret_key"
NODE_ENV = "production"
OPENSSL_CONF='/dev/null'
PUBLIC_SERVER_FILE="http://localhost:5000/"
```

Replace "your-mongodb-uri" with the actual URI of your MongoDB database.

#### Step 5: Install backend Dependency

In your terminal, navigate to the /backend directory

```bash
cd backend
```

Run Following command to install dependencies

```bash
npm install
```
This command will install all the required packages specified in the package.json file.

### Step 7: Run Backend Server

```bash
nodemon src/server.js
```
