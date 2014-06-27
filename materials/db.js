var level = require('level')
var path = require('path')

var db = level(path.join(__dirname, 'db'), {valueEncoding: 'json'})

module.exports = db
