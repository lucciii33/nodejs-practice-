const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')
const User = require('../model/userModal')

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({user: req.user.id})

    res.status(200).json(goals)
})

const createGoals = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("please add text flied")
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    
    res.status(200).json(goal)
})

const updateGoals = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error ('goal not found')
    }

    const user = await User.findById(req.user.id)
    if(!user){
        res.status(400)
        throw new Error ('goal not foun')
    }

    const updatedGoal =  await Goal.findByIdAndUpdate(req.params.id,  req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
})


const deleteGoals = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error ('goal not found')
    }
    await goal.remove()

    res.status(200).json({id : req.params.id})
})


module.exports = {
    getGoals,
    createGoals,
    updateGoals,
    deleteGoals
}