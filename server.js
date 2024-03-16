const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const connectToDB = require('./db/connectToDB')

const itemsRoutes = require('./routes/itemsRoutes')
const transactionRoutes = require('./routes/transactionRoutes')

const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()


app.use('/items-api', itemsRoutes)
app.use('/transactions-api', transactionRoutes)


app.listen(process.env.PORT, ()=>{
    connectToDB()
    console.log(`Server Started at PORT: ${process.env.PORT}`)
})


module.exports = app
