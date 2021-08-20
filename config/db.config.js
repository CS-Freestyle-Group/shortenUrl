require('dotenv').config()
const mongoose = require('mongoose')

const ip = process.env.MONGO_DB_URL
const port = process.env.MONGO_DB_PORT

const DB_URI = `mongodb://${ip}:${port}/urlshortener` || 'mongodb://localhost:27017/urlshortener'

mongoose.connect(DB_URI,{useNewUrlParser:true, useUnifiedTopology:true})

const connection = mongoose.connection

module.exports = connection
