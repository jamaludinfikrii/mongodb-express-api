const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000
const userRouter = require('./router/userRouter')


app.use(bodyParser.json())


app.get('/' , (req,res) => {
    res.send('<h1> Selamat Datang Di API Express-MongoDb </>')
})

app.use('/user' , userRouter)




app.listen(port , ()=> console.log('Server Berjalan di port ' + port))



// GET ALL USERS

// GET USER BY ID

// INSERT USER

// INSERT USERS

// UPDATE USER BY ID

// DELETE USER BY ID