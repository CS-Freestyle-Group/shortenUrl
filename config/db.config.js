require('dotenv').config()
const mongoose = require('mongoose')

const ip = process.env.MONGO_DB_URL
const port = process.env.MONGO_DB_PORT

const DB_URI =  process.env.MONGO_DB_URL || 'mongodb+srv://first545455:3fDnlRxYb74n10w8@discordcluser.z7fpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(DB_URI,{useNewUrlParser:true, useUnifiedTopology:true})

const connection = mongoose.connection

module.exports = connection
