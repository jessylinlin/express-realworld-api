const express = require('express')
const router = express.Router()
const articleCtrl = require('../controller/article')
const articleValidator = require('../validator/article')
const auth = require('../middleware/auth')

//获取所有文章
router.get('/', articleCtrl.getArticles)

//
router.get('/feed', articleCtrl.feedArticle)

//获取指定文章
router.get('/:slug', articleValidator.getArticle, articleCtrl.getArticleBySlug)

//创建文章
router.post('/', auth, articleValidator.createArticle, articleCtrl.createArticle)
//更新
router.put('/:slug', articleValidator.updateArticle, articleCtrl.updateArticle)

//删除
router.delete('/:slug', articleCtrl.deleteArticle)

//添加评论
router.post('/:slug/comments', articleCtrl.createArticleComments)

//获取指定文章的所有评论
router.get('/:slug/comments', articleCtrl.getArticleComments)

//删除评论
router.delete('/:slug/comments/:id', articleCtrl.deleteArticleComment)

//点赞文章
router.post('/:slug/favorite', articleCtrl.favoriteArticle)

//取消点赞文章
router.delete('/:slug/favorite', articleCtrl.unfavoriteArticle)

module.exports = router