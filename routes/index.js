let express = require('express')
let indexRouter = express.Router()

indexRouter.get('/', function(req, res) {
    let response = {}

    response.message = 'Connected. May the REST be with you!'
    
    res
        .status(200)
        .json(response)
})

module.exports = indexRouter