var http = require('http');
var browserify = require('browserify');
var shoe = require('shoe');
var db = require('./db');
var ml = require('multilevel');

var server = http.createServer(function(req, res){
  if (req.url == '/') return res.end('<script src="/bundle.js"></script>');
  if (req.url == '/bundle.js') return browserify().add(__dirname + '/browser.js').bundle().pipe(res);
})

ml.writeManifest(db, __dirname + '/manifest.json')

var sock = shoe(function(con){
  con.pipe(ml.server(db)).pipe(con)
});
sock.install(server, '/socket')

server.listen(3000);


