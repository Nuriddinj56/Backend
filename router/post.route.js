const express= require('express')
const postContriller = require('../controllers/post.contriller');
const logger = require('../middlewares/logger')

const router = express.Router()

router.get('/get', postContriller.getAll);
router.post('/create', logger, postContriller.create)
router.delete('/delete/:id', postContriller.delete)
router.put('/edit/:id', postContriller.edit)
router.get('/get-one/:id', postContriller.getOne)

module.exports=router