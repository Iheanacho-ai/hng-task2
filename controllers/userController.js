const User = require('../models/userModel')
const mongoose = require('mongoose')

//get all users
const getUsers = async(req, res) => {

    try {
        const users =  await User.find({}).sort({createdAt: -1})
        res.status(200).json(users)
    } catch (error) {
        res.json(400).json({error: error.message})
        
    }

    
}

//get a single user
const getUser = async(req, res) => {
    const {id} = req.params

    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'Id is invalid'})
        }

        user = await User.findById({_id: id})
       
        
        
        if(!user){
            return res.status(404).json({error: 'No such user'})
        }
        
        res.status(200).json(user)
    } catch (error) {
        res.json(400).json({error: error.message})
    }

}
//create a new user
const createUser = async(req, res) => {
    const {name} = req.body

    //add doc to db
    try {
        const user = await User.create({name})
        res.status(200).json(user)
    } catch (error) {
        res.json(400).json({error: error.message})
    }
}
//delete a user
const deleteUser = async(req, res) => {
    const {id} = req.params

    try {
        //check if the id is valid
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'Id is invalid'})
        }

        user = await User.findOneAndDelete({_id: id})
       
        
        if(!user){
            return res.status(404).json({error: 'No such user'})
        }
        
        res.status(200).json(user)
    } catch (error) {
        res.json(400).json({error: error.message})
    }
}
//update a user
const updateUser = async(req, res) => {
    const {id} = req.params

    //add delete to db
    try {

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'Id is invalid'})
        }

        user = await User.findOneAndUpdate({_id: id}, {
            ...req.body
        })
    
        
        
        if(!user){
            return res.status(404).json({error: 'No such user'})
        }
        
        res.status(200).json(user)
    } catch (error) {
        res.json(400).json({error: error.message})
    }
}

module.exports = {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser
}
