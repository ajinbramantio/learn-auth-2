const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.json())
//Mongoose

const all = require('./middlewares')
const users = require('./middlewares/users')
app.get('/', all.getHello)
app.post('/register', users.register)
app.post('/login', users.login)
app.get('/users', users.getAllUser)
app.get('/profile', users.profile)

app.listen(port, () => {
  console.log(`running learn-auth ${port}`)
})
