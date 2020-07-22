const config = require("./config.js");

const app = () => {
    const self = {
        get config() {
            return config
        }
    }
    return self;
}

module.exports = app
