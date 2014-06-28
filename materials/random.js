
var db = require('./db')

var users = [
  'juliangruber',
  'dominictarr',
  'substack',
  'rvagg',
  'mcollina',
  'hij1nx',
  'raynos',
  'ralphtheninja',
  'kessler'
]

var say = [
  'hello',
  'databases!'

]

function rand (ary) {
  return ary[Math.floor(Math.random()*ary.length)]
}

setInterval(function () {
  db.put(''+Date.now(), {
    username: rand(users),
    

  }

}, 1)
