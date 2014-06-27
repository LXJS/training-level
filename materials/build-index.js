

var db = require('./db')

db.createReadStream()
  .on('data', function(kv){
    db.put('by-author!' + kv.value.username + '!' + kv.key, kv.key, function(err){
      if (err) throw err;
      process.stdout.write('.');
    })
  });

