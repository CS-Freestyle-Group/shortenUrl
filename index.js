const express = require("express")

const app = express()


const connection = require('./config/db.config')
connection.once('open',() => console.log(`DB Connected to ${process.env.MONGO_DB_URL}`))
connection.once('error',() => console.log('Error'))

app.use(express.json({
    extended: false
}))
app.use('/',require('./routes/redirect'))
app.use('/api/url',require('./routes/url'))

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`))