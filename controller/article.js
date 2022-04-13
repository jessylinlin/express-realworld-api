const { Article, User } = require('../model')

//获取所有文章
exports.getArticles = async (req, res, next) => {
    try {
        //取查询参数
        const {
            limit = 20,
            offset = 0,
            tag,
            author
        } = req.query

        const filter = {}

        if (tag) {
            //包含
            filter.tagList = tag
        }

        if (author) {
            const user = await User.findOne({
                username: author
            })

            filter.author = user ? user._id : null
        }

        const articles = await Article.find(filter)
            .skip(Number.parseInt(offset)) // 跳过多少条
            .limit(Number.parseInt(limit)) // 取多少条
            .sort({
                createdAt: -1//倒序
            })

        const articleCount = await Article.countDocuments()

        res.status(200).json({
            articles,
            articleCount
        })
    } catch (err) {
        next(err)
    }
}

//feed
exports.feedArticle = async (req, res, next) => {
    try {
        res.send('login')
    } catch (err) {
        next(err)
    }
}
//获取指定文章
exports.getArticleBySlug = async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.slug).populate('author')
        if (!article) {
            return res.status(404).end()
        }
        res.status(200).json({
            article
        })
    } catch (err) {
        next(err)
    }
}
//创建文章
exports.createArticle = async (req, res, next) => {
    try {
        const article = new Article(req.body.article)
        article.author = req.user._id
        article.populate('author').execPopulate()
        await article.save()
        res.status(201).json({
            article
        })
    } catch (err) {
        next(err)
    }
}

//更新文章
exports.updateArticle = async (req, res, next) => {
    try {
        //验证id
        
    } catch (err) {
        next(err)
    }
}
//删除文章
exports.deleteArticle = async (req, res, next) => {
    try {
        res.send('login')
    } catch (err) {
        next(err)
    }
}
//添加评论
exports.createArticleComments = async (req, res, next) => {
    try {
        res.send('login')
    } catch (err) {
        next(err)
    }
}

//获取指定文章的所有评论
exports.getArticleComments = async (req, res, next) => {
    try {
        res.send('login')
    } catch (err) {
        next(err)
    }
}
//删除评论
exports.deleteArticleComment = async (req, res, next) => {
    try {
        res.send('login')
    } catch (err) {
        next(err)
    }
}

//点赞
exports.favoriteArticle = async (req, res, next) => {
    try {
        res.send('login')
    } catch (err) {
        next(err)
    }
}
//取消点赞
exports.unfavoriteArticle = async (req, res, next) => {
    try {
        res.send('login')
    } catch (err) {
        next(err)
    }
}
