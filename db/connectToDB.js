const mongoose = require('mongoose')

const connectToDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log('Connected to MongoDB')

    } catch (error) {
        console.log(`Error connecting MongoDB: ${error.message}`)
    }
}

module.exports = connectToDB