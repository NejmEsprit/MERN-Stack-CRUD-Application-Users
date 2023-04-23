const express =require ('express')
const bodyParser = require('body-parser')
const { AddUser, findAllUsers, findById, deleteUser, updateUser } = require('../controllers/users')
const router =express.Router()

var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/users', jsonParser,urlencodedParser,AddUser)
router.get('/users',findAllUsers)
router.get('/users/:id',findById)
router.delete('/users/:id',deleteUser)
router.put('/users/:id', jsonParser,urlencodedParser,updateUser)

module.exports =router;