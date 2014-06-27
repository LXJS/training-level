

var db = level('./db')
var INDEX = require('./index');

var messages = db.sublevel('messages');
var index = INDEX(messages, db.sublevel('messages-index'));

messages.put('key', {
  all: 'the',
  things: 'should',
  be: 'indexed',
  ts: ''+Date.now(),
  username: 'dominictarr'
});

index.query('username', 'dominictarr', function(err, messages){

});

