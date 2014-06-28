
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
  'databases!',
  'leveldb is cool'
]

function rand (ary) {
  return ary[Math.floor(Math.random()*ary.length)]
}

setInterval(function () {
  var ts = Date.now()
  var kv = {
      key:''+ts,
      value: {
        username: rand(users),
        message: rand(say),
        ts: ts,
        random: Math.random()
      },
      type: 'put'
    }

  db.put(
    kv.key, kv.value,
  function (err) {
    if(err) throw err
    process.stdout.write('.')
  })

}, 1)
