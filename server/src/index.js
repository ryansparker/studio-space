require ('dotenv').config()
const app = require('./app')
const services = require('./services')

const server = app()

services(server) 