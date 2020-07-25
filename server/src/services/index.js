const http = require("./http")
const database = require('./database')
const healthcheck = require('./healthcheck')
const google = require('./login-google')
const facebook = require('./login-facebook')
const spaces = require('./spaces')


function services(app) {
    database(app)
    http(app)
    healthcheck(app)
    google(app)
    facebook(app)
    spaces(app)
}


module.exports = services