const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModal')


// //@desc POST autenticates the user
// //@route POST /api/users/login
// //@access public
const loginUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body
    //check for user email 
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        })
    }else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
    //check for password

    res.json({message: 'Login User'})
})

// //@desc POST register new users
// //@route POST /api/users
// //@access public
const userRegister = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body

    if(!name|| !email || !password ){
        res.status(400)
        throw new Error('please add all fields ')
    }

    //check if the user exists
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('user already exists')
    }

    //hash a password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashPassword
    })

    if (user) {
        res.status(201).json({
          _id: user.id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        })
      } else {
        res.status(400)
        throw new Error('Invalid user data')
      }
})

// //@desc GET get users
// //@route GET /api/users/me
// //@access private
const getMe = asyncHandler(async(req, res) => {
const {_id, name, email} = await User.findById(req.user.id)

    res.status(200).json({
        id:_id,
        name, 
        email
    })

})

//generate the token 
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'})

}

module.exports = {
    userRegister,loginUser,getMe
}