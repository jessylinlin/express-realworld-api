//获取指定用户资料
exports.getProfile = async (req, res, next) => {
    try {
        res.send('login')
    } catch(err) {
        next(err)
    }
}

//关注
exports.follow = async (req, res, next) => {
    try {
        res.send('login')
    } catch(err) {
        next(err)
    }
}

//取消关注
exports.unfollow = async (req, res, next) => {
    try {
        res.send('login')
    } catch(err) {
        next(err)
    }
}