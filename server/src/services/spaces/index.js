
const { v4: uuidv4 } = require('uuid');

const roomTypes = ["private", "semiPrivate", "shared"]
const propertyTypes = ["house", "apartment", "warehouse", "commercial"]
const squareFootage = ["50", "100", "200", "400", "500"]


function service(app) {

    app.http.post('/spaces', async function (req, res) {

        const except = e => {
            throw e
        }

        function toBoolean(arg) {
            if (arg === "on") {
                return true
            } else {
                return false
            }
        }

        const data = req.body
        const newSpace = {
            ID: uuidv4(),
            roomType: roomTypes.includes(data.roomType) ? data.roomType : except("invalid type"),
            propertyType: propertyTypes.includes(data.propertyType) ? data.propertyType : except("invalid type"),
            squareFootage: squareFootage.includes(data.squareFootage) ? data.squareFootage : except("invalid type"),
            street: data.street,
            apt: data.apt,
            city: data.city,
            state: data.state,
            zip: data.zip,
            amenities: {
                wifi: toBoolean(data.wifi),
                sink: toBoolean(data.sink),
                seating: toBoolean(data.seating),
                tables: toBoolean(data.tables),
                storage: toBoolean(data.storage),
                crashpad: toBoolean(data.crashpad),
                kitchen: toBoolean(data.kitchen)
            },
            equipment: {
                easel: toBoolean(data.easel),
                palette: toBoolean(data.palette),
                paperCutter: toBoolean(data.paperCutter),
                press: toBoolean(data.press),
                loom: toBoolean(data.loom),
                sprayBooth: toBoolean(data.sprayBooth),
                woodshop: toBoolean(data.woodshop),
                welding: toBoolean(data.welding)
            },
            info: data.info
        }
        await app.database.insertSpace(newSpace)
        res.status(200).json(newSpace)
        
    })

}


module.exports = service