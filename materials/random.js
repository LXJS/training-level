
var db = require('./db')

var users = ['juliangruber', 'dominictarr']

function rand(ary) {
  return ary[Math.floor(Math.random()*ary.length)]
}

setInterval(function () {

  db.put(''+Date.now(), {username: rand(users), message: 'Hello World'}, function (err) {
    if (err) throw err //give up. this should never happen.
    console.log('.') //show progress
  })

}, 100)


