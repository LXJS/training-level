
var db = require('./db')

var users = ['juliangruber', 'dominictarr', 'rvagg', 'substack', 'matteo', 'kesal']

function rand(ary) {
  return ary[Math.floor(Math.random()*ary.length)]
}

setInterval(function () {
  var ts = ''+Date.now();
  var name = rand(users);

  db.sublevel('messages')
    .put(ts, {username: name, message: 'Hello World', ts: ts}, function (err) {
    if (err) throw err //give up. this should never happen.
    process.stdout.write('.') //show progress
  })

}, 1)


