var level = require('level')
var path = require('path')
var hooks = require('level-hooks')

var sublevel = require('level-sublevel')
var Index = require('./index')

// level(path, options)
var _db = level(path.join(__dirname, 'db'), {valueEncoding: 'json'})
var db = sublevel(_db)

var indexDb = db.sublevel('index')
Index(db, indexDb)

module.exports = db

if(!module.parent) {
  _db.createReadStream()
    .on('data', console.log)
}
