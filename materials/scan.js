
var db = require('./db')

var user = process.argv[2]

db.createReadStream()
  .on('data', function (kv) {
    if(kv.value.username === user)
      console.log(kv.value)
  })

