const express= require('express')
const router=express.Router();
const authControllers=require('../controllers/auth-controllers')

router.post('/login',authControllers.login)
router.post('/signup',authControllers.signup)
router.post('/logout',authControllers.logout)

module.exports=router