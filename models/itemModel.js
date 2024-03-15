const mongoose = require('mongoose')



const itemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    last_updated_timestamp: {
        type: Date,
        required: true
    }
}, {timestamps: true})


const itemModel = mongoose.model('Item', itemsSchema)

module.exports = itemModel