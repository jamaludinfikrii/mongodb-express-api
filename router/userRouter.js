const router = require('express').Router()
const a = require('./../controller')
const {getAllUsers}  = a.userController

router.get('/', (req,res) => {
    res.send('<h1> Selamat Datang di Route User </h1>')
})

router.get('/users' , getAllUsers)
router.get('/user/:id' , a.userController.getUserById)
router.post('/user' , a.userController.addData)
router.put('/:id' ,a.userController.updateData)
module.exports = router