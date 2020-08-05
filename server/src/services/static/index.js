const express = require('express')
const fs = require("fs")


function service(app){

    app.http.use("/static", express.static(app.config.static.clientDir))

    app.http.use(function(req, res) {
    fs.readFile("../client/build/index.html", (err, data) => res.status(200).send(data.toString()))
    })

}


module.exports = service