

var db = require('./db');

var messages = db.sublevel('messages');

/*
messages.put('key', {
  all: 'the',
  things: 'should',
  be: 'indexed',
  ts: ''+Date.now(),
  username: 'dominictarr'
});*/

db.index.query('username', 'dominictarr', function(err, messages){
  if (err) throw err;
  console.log('messageIds', messages);
});

