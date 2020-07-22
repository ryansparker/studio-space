const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { v4: uuidv4 } = require('uuid');

async function service(app) {


    // Connection URL
    const url = app.config.database.dbURL
    const name = app.config.database.dbName

    const dbConnect = await MongoClient.connect(url);
    const db = dbConnect.db(name)

 console.log(db)
    // the database announce itself to other services
    app.database = {
        async getOrCreateAccount({ facebookID, googleID, name, photo }) {
            //get the account number
            const accounts = db.collection("accounts")
            const account = await accounts.findOne({ $or: [{facebookID}, {googleID}] })

            
            if (account) {
                return account
            }

            //if there's not one, create account 
            const newAccount = {
                googleID,
                facebookID,
                ID: uuidv4(),
                name,
                photo
            }
            await accounts.insertOne(newAccount)
            return newAccount
        }

    }
}


module.exports = service