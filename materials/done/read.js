var db = require('./db')

db.get(process.argv[2], function(err, val){
  console.log('value: ', val);
});

