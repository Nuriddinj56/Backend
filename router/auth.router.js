const express= require('express')
const authContoller = require('../controllers/auth.contoller')

const router = express.Router()

router.post('/register', authContoller.register)
router.get('/activation/:id', authContoller.activation)

module.exports=router