const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
})

const createGoals = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("please add text flied")
    }

    const goal = await Goal.create({
        text: req.body.text
    })
    
    res.status(200).json(goal)
})

const updateGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: `edit goals ${req.params.id}`})
})


const deleteGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: `delete goals ${req.params.id}`})
})


module.exports = {
    getGoals,
    createGoals,
    updateGoals,
    deleteGoals
}