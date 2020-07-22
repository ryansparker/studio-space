const http = require("./http")
const database = require('./database')
const healthcheck = require('./healthcheck')
const google = require('./login-google')
const facebook = require('./login-facebook')


function services(app) {
    database(app)
    http(app)
    healthcheck(app)
    google(app)
    facebook(app)
}


module.exports = services