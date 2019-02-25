require('dotenv').config()
const mongoose = require('mongoose')
const helpers = require('../../helpers')

mongoose.connect(`${process.env.URL}/${process.env.DB_NAME}`, {
  userNewUrlParser: true
})

const User = mongoose.model('User', {
  name: String,
  email: String,
  password: String
})
const register = async (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }
  console.log(newUser)

  res.send({
    message: 'Register',
    User: newUser
  })
}
const login = async (req, res) => {
  res.send({
    message: 'Login'
  })
}

const getAllUser = async (req, res) => {
  res.send({
    message: 'Gell All users',
    users: await User.find()
  })
}
const profile = async (req, res) => {
  res.send({
    message: 'get profile'
  })
}
module.exports = {
  register,
  login,
  getAllUser,
  profile
}
