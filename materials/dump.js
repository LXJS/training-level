

var db = require('./db')

//the whole api: put get del batch createReadStream approximateSize on

db.createReadStream()
  .on('data', console.log)



