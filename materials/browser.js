var socket = require('shoe')('/socket');
var ml = require('multilevel');
var manifest = require('./manifest.json');

var db = ml.client(manifest);
socket.pipe(db.createRpcStream()).pipe(socket);

window.db = db;

console.log('hi')
