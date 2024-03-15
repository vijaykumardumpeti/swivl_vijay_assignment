const express = require('express')

const  { getItem, getItems, postItem, updateItem, deleteItem } = require( '../controllers/itemsController')



const router = express.Router()


// GET /items: Retrieve a list of all items.
// POST /items: Add a new item to the inventory.
// GET /items/:id: Retrieve a specific item by its id.
// PUT /items/:id: Update a specific item by its id.
// DELETE /items/:id: Remove a specific item from the inventory.

// get => /items-api/items
// get_byid => /items-api/items/:{id}
// post => /items-api/items
// put => /items-api/items/:id
// delete => /items-api/items/:id

router.get('/items', getItems)
router.get('/items/:id', getItem)
router.post('/items', postItem)
router.put('/items/:id', updateItem)
router.delete('/items/:id', deleteItem)




module.exports = router