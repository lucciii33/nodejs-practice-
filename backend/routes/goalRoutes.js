const express = require("express")
const router = express.Router()
const {getGoals, createGoals, updateGoals, deleteGoals} = require("../controller/goalController")


router.route("/").get(getGoals).post(createGoals)
router.route("/:id").put(updateGoals).delete(deleteGoals)
// //@desc GET goals
// //@route GET /api/goals
// //@access Private
// router.get("/", getGoals)


// //@desc POST goals
// //@route POST /api/goals
// //@access Private
// router.post("/", createGoals)

// //@desc PUT goals
// //@route PUT /api/goals/:id
// //@access Private
// router.put("/:id", updateGoals)

// //@desc DELETE goals
// //@route DELETE /api/goals/:id
// //@access Private
// router.delete("/:id", deleteGoals )




module.exports = router