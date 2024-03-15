const mongoose = require('mongoose')


const transactionSchema = new mongoose.Schema({
    item_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ["IN", "OUT"]
    },
    quantity: {
        type: Number,
        required: true
    },
    transaction_timestamp: {
        type: Date,
        required: true
    }
}, {timestamps: true})


const transactionModel = mongoose.model('Transaction', transactionSchema)

module.exports = transactionModel