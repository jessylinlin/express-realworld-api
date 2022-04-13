const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const errorHandle = require('./middleware/error-handle')

//连接数据库
require('./model')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded())
app.use(morgan('dev'))
app.use(cors())

app.use('/api', router)

//挂在统一处理错误的中间件
app.use(errorHandle)

app.listen(PORT, () => {
    console.log(`server is running at localhost:${PORT}`)
})

