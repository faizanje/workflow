const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
dataRoute = require('./routes/data.route')
const app = express()
const config = require('./DB')
mongoose.Promise = global.Promise
let port = process.env.PORT || '8000';
app.listen(port, function(){
    console.log('Listening on port.. : ' + port)
})
mongoose.connect(config.DB, { useUnifiedTopology:true,useNewUrlParser:true })
.then(
    ()=>{console.log('Database is connected!')},
    err => {console.log('Unable to connect to database' + err)}
);
app.use(bodyParser.json())
app.use(cors())
app.use('/data',dataRoute)