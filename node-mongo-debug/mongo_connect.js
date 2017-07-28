// Source: https://github.com/einaros/ws

let port = 3001;

var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: port });

console.log("socket on port " + port);

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});
