

const express = require('express')
const {createTransactionForItem, getTransactionsOfSpecificItem} = require('../controllers/transactionController')


const router = express.Router()


// /transactions-api

router.post('/items/:id/transaction', createTransactionForItem)

router.get('/items/:id/transactions', getTransactionsOfSpecificItem)




module.exports  = router