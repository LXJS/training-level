

var db = require('./db')

var user = process.argv[2]

db.sublevel('by-user').createReadStream({
  start: user + '!', end: user+'!~'
})
  .on('data', function (kv) {
    db.get(kv.value, function (err, value) {
      console.log(value)
    })
  })

