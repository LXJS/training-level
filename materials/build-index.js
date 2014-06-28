

var db = require('./db')

db.createReadStream({lt: 'by-user!'})
  .on('data', function (kv) {
      db.put(
        'by-user!' + kv.value.username + '!' + kv.value.ts,
        kv.key,
        function () {
        process.stdout.write('.')
      })
  })

