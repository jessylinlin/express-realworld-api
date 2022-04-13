const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
//验证token
const auth = require('../middleware/auth')

//用户登录
router.post('/users/login', userValidator.login, userCtrl.login)

//用户注册
router.post('/users', userValidator.register, userCtrl.register)//3通过验证执行业务逻辑

//获取用户信息
router.get('/user', auth, userCtrl.getCurrentUser)

//更新用户信息
router.put('/user', auth, userCtrl.updateCurrentUser)

module.exports = router