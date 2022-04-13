const express = require('express')
const router = express.Router()
const profileCtrl = require('../controller/profile')

//获取用户资料
router.get('/:username', profileCtrl.getProfile)

//关注用户
router.post('/:username/follow', profileCtrl.follow)

//取消关注
router.delete('/:username/follow', profileCtrl.unfollow)

module.exports = router