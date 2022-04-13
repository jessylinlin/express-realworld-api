const mongoose = require('mongoose');
const { dbUrl } = require('../config/config.default')

//链接MongoDB数据库
mongoose.connect('mongodb://localhost:27017/realworld', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (err) => {
    console.log('mongoDB 数据库连接失败', err)
});
db.once('open', function() {
  // we're connected!
  console.log('mongoDB 数据库连接成功')
});

//创建了一个数据模型
// const Cat = mongoose.model('Cat', { name: String });

// //创建一个对象
// const kitty = new Cat({ name: '包黑子' });
// //保存成功
// kitty.save().then(() => console.log('meow'));

//组织导出模型
module.exports = {
  User: mongoose.model('User', require('./user')),
  Article: mongoose.model('Article', require('./article'))
}