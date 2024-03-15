
const itemModel = require('../models/itemModel')



exports.getItems = async function(req, res) {
    try {
        const items = await itemModel.find({})

        if (items.length === 0) {
            return res.status(404).json({ message: 'Items not found' });
        }

        res.status(200).json({
            message: 'items found successfully',
            items
        })

    } catch (error) {
        console.log("Error in getItems: ", error.message)
        res.status(500).json({error: `Internal server error : ${error.message}`})
        
    }
}

exports.getItem = async function (req, res) {
    try {
        const id = req.params.id
        const item = await itemModel.findById({_id: id})

        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        res.status(200).json({
            message: 'item found successfully',
            item
        })

    } catch (error) {
        console.log("Error in getItem: ", error.message)
        res.status(500).json({error: `Internal server error : ${error.message}`})
        
    }
}

exports.postItem = async function (req, res) {
    try {
        const {name, description, quantity} = req.body
        
        if(name === '' || description === '' || quantity === ''){
            // return res.status(404).json({message: "Please provide all the fields!"})
            throw new Error('Please provide all the fields!')
        }

        const last_updated_timestamp = new Date()

        const newItem = await itemModel.create({
            name, 
            description, 
            quantity,
            last_updated_timestamp
        })

        res.status(201).json({
            message: 'item added successfully',
            newItem
        })

    } catch (error) {
        console.log("Error in postItem: ", error.message)
        res.status(500).json({error: `Internal server error : ${error.message}`})
        
    }
}

exports.updateItem = async function (req, res) {
    try {
        const {name, description, quantity} = req.body

        const last_updated_timestamp = new Date()

        const updateItem = {
            name,
            description,
            quantity,
            last_updated_timestamp
        }

        const newItem = await itemModel.findOneAndUpdate({_id: req.params.id}, updateItem, {new: true})


        if(!newItem){
            return res.status(404).json({message: 'item not found',})
        }

        res.status(200).json({
            message: 'Item updated successfully',
            newItem
        })

    } catch (error) {
        console.log("Error in updateItem: ", error.message)
        res.status(500).json({error: `Internal server error : ${error.message}`})
        
    }
}

exports.deleteItem = async function (req, res) {
    try {
        const deleteItem = await itemModel.findByIdAndDelete({_id: req.params.id})


        if(!deleteItem){
            return res.status(404).json({message: 'item not found',})
        }

        res.status(200).json({
            message: 'Item deleted successfully',
            deleteItem
        })

    } catch (error) {
        console.log("Error in deleteItem: ", error.message)
        res.status(500).json({error: `Internal server error : ${error.message}`})
        
    }
}

