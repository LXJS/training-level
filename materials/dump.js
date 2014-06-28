var db = require('./db')

db.createReadStream()
  .on('data', function (kv) {
    console.log(kv)
  })
  .on('end', function () {
    console.log('end.')
  })

