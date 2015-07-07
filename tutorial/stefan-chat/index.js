var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});*/

http.port = 3002;

/*io.on('connection', function(socket){
  console.log('a user connected');
     socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});*/

/*io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});*/

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(http.port, function(){
  console.log('listening on:' + http.port);
});