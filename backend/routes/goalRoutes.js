const express = require("express")
const router = express.Router()
const {getGoals, createGoals, updateGoals, deleteGoals} = require("../controller/goalController")
const {protect} = require("../middleware/authMiddleware")

router.route("/").get(protect, getGoals).post(protect, createGoals)
router.route("/:id").put(protect, updateGoals).delete(protect, deleteGoals)
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