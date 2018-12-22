let express = require('express')
let cors = require('cors')
let app = module.exports = express()
let config = require('./config/config')
let bodyParser = require('body-parser')



// configure bodyParser, let us to get data from http POST request
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json({ limit : '50mb' }))

// cofigure cross origin (cors)
app.use(cors({ origin : true }))


// --------------------- INDEX ---------------------
app.use(config.base_url + '/root', require('./routes/index'))


app.use(function(req, res, next) {
    let err = new Error('Not Found')
    err.status = 404
    next(err)
})

app.use(function(err, req, res) {
    res.status(500)
    res.send(err)
})

module.exports = app