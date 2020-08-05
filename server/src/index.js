console.log(`../.env.${process.env.NODE_ENV || "development"} `)
const path = require ('path')
require ('dotenv').config({path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || "development"}`)})
const app = require('./app')
const services = require('./services')


const server = app()

services(server) 