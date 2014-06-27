

var db = require('./db')

//the whole api: put get del batch createReadStream approximateSize on

var name = process.argv[2];

db.sublevel('messages-by-author').createReadStream({
  gt: name + '!',
  lt: name + '!~'
})
  .on('data', function(kv){
    db.sublevel('messages').get(kv.value, function(err, value){
      console.log(value.message);
    });
  });



