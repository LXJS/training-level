

var db = require('./db')

//the whole api: put get del batch createReadStream approximateSize on

var name = process.argv[2];

db.createReadStream({
  lt: 'b'
})
  .on('data', function(kv){
    if (kv.value.username == name) console.log(kv.value.message)
  });



