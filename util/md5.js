const crypto = require('crypto')

//crypto.getHashes()

module.exports = (str) =>  {
    return crypto.createHash('md5')
    .update('orange' + str)
    .digest('hex')
}