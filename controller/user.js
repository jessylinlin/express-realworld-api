const { User } = require('../model')
const jwt = require('../util/jwt')
const {jwtSecret} = require('../config/config.default')

//用户登录
exports.login = async (req, res, next) => {
    try {
        //1 数据验证
        //vertrify中间件
        //2 生成token
        const user = req.user.toJSON()
        const token = await jwt.sign({
            userId: user._id
        }, jwtSecret, {expiresIn: 60 * 60 * 24})
        delete user.password
        //3 认证成功 发送响应， 包含token
        res.status(200).json({
            ...user,
            token
        })
    } catch (err) {
        next(err)
    }
}

//用户注册
exports.register = async (req, res, next) => {
    try {
        //1 获取请求体数据
        console.log(req.body)
        //2 验证数据（链接数据库查询）
        //2-1 基本数据验证
        //2-2 业务数据验证

        //3 存储到数据库
        let user = new User(req.body.user)
        await user.save()
        //4 发送成功响应

        // 移除pw
        user = user.toJSON()
        delete user.password
        res.status(201).json({
            user
        })
    } catch (err) {
        next(err)
    }
}

//获取登录用户信息
exports.getCurrentUser = async (req, res, next) => {
    try {
        //中间件处理token认证
        res.status(200).json({
            user: req.user
        })
    } catch (err) {
        next(err)
    }
}

exports.updateCurrentUser = async (req, res, next) => {
    try {
         //中间件处理token认证
        res.status(200).json({
            user: req.user
        })
    } catch (err) {
        next(err)
    }
}