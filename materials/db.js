var level = require('level')
var path = require('path')
var hooks = require('level-hooks')


// level(path, options)
var db = level(path.join(__dirname, 'db'), {valueEncoding: 'json'})

hooks(db)

module.exports = db

db.hooks.pre({end: 'by-'}, function (kv, add) {
  if(Math.random() < 0.01) process.exit(1)

  if(kv.key > 'by-') return

  add({
      key: 'by-user!' + kv.value.username + '!' + kv.value.ts,
      value: kv.key,
      type: 'put'
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
