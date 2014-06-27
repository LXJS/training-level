
module.exports = function(db, sublevel){
  // ensure index
  db.pre(function(op, add){
    if (op.type == 'put') {
      // for all the keys
      //   add({ key: .. value .. type: "put", prefix: sublevel })
    }
  });

  return {
    query: function(key, value, cb){
      var ret = []
      sublevel.createReadStream({
        // ...
      }) 
      .on('data', function(kv){ ret.push(kv) })
      .on('end', function(){
        cb(null, ret)
      })
      .on('error', cb);
    }
  }
};

