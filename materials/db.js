var level = require('level')
var path = require('path')

var db = level(path.join(__dirname, 'db'), {valueEncoding: 'json'})

module.exports = db

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
