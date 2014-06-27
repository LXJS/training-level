var level = require('level')
var path = require('path')
var hooks = require('level-hooks')
var sublevel = require('level-sublevel')

var db = level(path.join(__dirname, 'db'), {valueEncoding: 'json'})
db = sublevel(db)

var messageDb = db.sublevel('messages');
var messagesByAuthor = db.sublevel('messages-by-author');

messageDb.pre(function(op, add, batch){
  if (op.type == 'put') {
    add({
      key: op.value.username + '!' + op.value.ts,
      value: op.key,
      type: 'put',
      prefix: messagesByAuthor
    })
  }
});

module.exports = db;

