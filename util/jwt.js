const jwt = require('jsonwebtoken')
const {promisify} = require('util')

exports.sign = promisify(jwt.sign)

exports.verify = promisify(jwt.verify)

exports.decode = promisify(jwt.decode)
// //生成jwt
// const token = jwt.sign({
//     foo: 'bar'
// }, 'sbbbbb', (err, token) => {
//     if (err) {
//         return console.log('生成token失败')
//     }

//     console.log(token)
// })

// //y验证jwt
// const ret = jwt.verify(
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2NDU1MTg4OTd9.tMVmNrUju2F6mCLakey_oI_8qg5zVigz0hPowPr5HKQ',
//     'sbbbbb',
//     (err, ret) => {
//         if (err) {
//             return console.log('token认证失败')
//         }

//         console.log(ret)
//     }
// )
