const express = require('express')
const router = express.Router()
const user = require('./user')
const profile = require('./profile')
const article = require('./article')
const tag = require('./tag')

//用户
//标签
router.use([user, tag])
//用户资料
router.use('/profiles', profile)
//文章
router.use('/articles', article)

module.exports = router