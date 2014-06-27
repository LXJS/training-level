
module.exports = function(db, sublevel){
  // ensure index
  db.pre(function(op, add){
    if (op.type == 'put') {
      Object.keys(op.value).forEach(function(key){
        add({
          key: /* ... */,
          value: /* ... */,
          type: 'put'
          prefix: sublevel
        });
      });
    }
  });

  return {
    query: function(key, value, cb){
      var ret = []
      sublevel.createReadStream({
        start: /* ... */,
        end: /* ... */
      }) 
      .on('data', function(kv){ ret.push(kv) })
      .on('end', function(){
        cb(null, ret)
      })
      .on('error', cb);
    }
  }
};

