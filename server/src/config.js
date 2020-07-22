module.exports = {
    http: {
        port: process.env.PORT
    },
    logInGoogle: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    logInFacebook: {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL
    },
    database: {
        dbURL: process.env.MONGO_URL,
        dbName: process.env.MONGO_DBNAME
       
    }

}