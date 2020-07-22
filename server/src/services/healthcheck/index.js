function service(app) {
    app.http.get("/healthcheck", (req, res) => {
        res.status(200).send("OK!")
    })
}

module.exports = service