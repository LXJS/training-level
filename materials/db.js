var level = require('level')
var path = require('path')
var hooks = require('level-hooks')

var sublevel = require('level-sublevel')

// level(path, options)
var db = sublevel(level(path.join(__dirname, 'db'), {valueEncoding: 'json'}))

module.exports = db

var userDb = db.sublevel('by-user')

db.pre(function (kv, add) {
  add({
    key: kv.value.username + '!' + kv.value.ts,
    value: kv.key,
    type: 'put',
    prefix: userDb
  })

})

if(!module.parent) {
  db.put('test', {ok: true}, function (err) {
    if(err) throw err
    console.log('ok')
    db.get('test', function (err, value) {
      if(err) throw err
      console.log('value was:', value)
    })
  })
}
