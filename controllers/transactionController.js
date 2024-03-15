const mongoose = require('mongoose')


const transactionModel = require('../models/transactionModel')
const itemModel = require('../models/itemModel')

exports.createTransactionForItem = async function (req, res) {
    try {
        const itemId = req.params.id
        const {type, quantity} = req.body


        if(!type || !quantity){
            // return res.status(404).json({message: "Please provide all the fields!"})
            throw new Error('Please provide all the fields!')
        }
        const item = await itemModel.findById(itemId)

        if(!item || !mongoose.Types.ObjectId.isValid(itemId)){
            return res.status(404).json({message: 'Invalid Item Id Please give proper Item Id!'})
        }
        if(quantity < 0){
            return res.status(404).json({message: 'Quantity cannot be negative'})

        }

        if((type !== "IN") && (type !== "OUT")){
            return res.status(404).json({message: "type should be either 'IN' or 'OUT'"})

        }


        const transaction_timestamp = new Date()

        const transaction = {
            item_id: itemId,
            type,
            quantity,
            transaction_timestamp
        }

        const newTransaction =   await transactionModel.create(transaction)

        res.status(201).json({
            message: 'Transaction created to specific Item successfully!',
            newTransaction

        })

    } catch (error) {
        console.log("Error in createTransactionForItem: ", error.message)
        res.status(500).json({error: `Internal server error : ${error.message}`})
        
    }
}

exports.getTransactionsOfSpecificItem = async function (req, res) {
    try {
        const itemId = req.params.id
        const item = await itemModel.findById(itemId)

        if(!item || !mongoose.Types.ObjectId.isValid(itemId)){
            return res.status(404).json({message: 'Invalid Item Id Please provide proper Item Id!'})
        }

        const transactionsByItemId = await transactionModel.find({item_id: itemId})
        if(transactionsByItemId.length === 0){
            return res.status(404).json({message: "No transactions found based on provided Item Id!"})
        }
        
        res.status(200).json({
            message: 'Transactions found by Item id successfully!',
            transactionsByItemId
        })

    } catch (error) {
        console.log("Error in getTransactionsOfSpecificItem: ", error.message)
        res.status(500).json({error: `Internal server error : ${error.message}`})
        
    }
}