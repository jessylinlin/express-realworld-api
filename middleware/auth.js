const { verify } = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')

module.exports = async (req, res, next) => {
    // 从请求头获取token
    let token = req.headers['authorization']
    token = token
        ? token.split('Bearer ')[1]
        : null
    if (!token) {
        return res.status(401).end()
    }
    // 验证
    try {
        const decodedToken = await verify(token, jwtSecret)
        req.user = await User.findById(decodedToken.userId)
        next()
    } catch (err) {
        return res.status(403).end()
    }



    // 无效 -- 发送响应状态码401
    // 有效 -- 读取用户信息 挂载到req请求对象上
    //next（）

}