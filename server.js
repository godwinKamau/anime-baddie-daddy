const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const connectToMongo = require('./db')
const port = 3000

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(express.static('public'))

connectToMongo()

app.set('viewengine', 'ejs')

require('./routes.js')(app)

app.listen(port, () => {
    console.log(`Running on localhost:${port}`)
})

//TODO: Set up mogoose with mongodb
//get a basic routes.js setup