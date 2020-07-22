const express = require('express')
const { urlencoded } = require('express')
const cors = require('cors')

//where we are setting up the express server
function service(app) {
    const expApp = express()
    expApp.use(express.json())
    expApp.use(urlencoded({ extended: true }))
    expApp.use(cors())
    expApp.listen(app.config.http.port, () => {
        console.log("I'm listening!")
        console.log(app.config.http)
    })

    app.http=expApp
}


module.exports = service