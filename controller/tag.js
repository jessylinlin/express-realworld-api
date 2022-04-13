//tag
exports.getTags = async (req, res, next) => {
    try {
        res.send('login')
    } catch(err) {
        next(err)
    }
}