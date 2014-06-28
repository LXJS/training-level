

var db = require('./db')

var user = process.argv[2]

db.createReadStream({
  gt: 'by-user!' + user + '!', lt: 'by-user!'+user+'!~'
})
  .on('data', function (kv) {
    db.get(kv.value, function (err, value) {
      console.log(value)
    })
  })
