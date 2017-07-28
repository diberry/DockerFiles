// Source: https://github.com/einaros/ws

var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 3001 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});
