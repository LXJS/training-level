

var db = require('./db')

var prop = process.argv[2]
var value = process.argv[3]

db.sublevel('index')
  .createQueryStream(prop, value)
  .on('data', function (value) {
    console.log(value)
  })

