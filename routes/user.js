const express = require('express')
const {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser

} = require('./controllers/userController')

const router = express.Router()

//GET all workouts
router.get('/', getUsers)

//GET a single workout
router.get('/:id', getUser)

//POST a new workout
router.post('/', createUser)

//DELETE a workout
router.delete('/:id', deleteUser)

//UPDATE a new workout
router.patch('/:id', updateUser  )

module.exports = router