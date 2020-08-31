#!/usr/bin/env node
var http = require('http');
const app = require('./app');

const routes = app.routes;
for (const verb in routes) {
  if (routes.hasOwnProperty(verb)) {
    routes[verb].forEach(function (route) {
      client.trackTrace({ message: verb + " : " + route['path'] });
    });
  }
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort('9000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {

  console.log("server.js::onError")

  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      log.error(client, bind + ' requires elevated privileges', CONFIG.AZURE.ENVIRONMENT)
      process.exit(1);
      break;
    case 'EADDRINUSE':
      log.error(client, bind + ' is already in use', CONFIG.AZURE.ENVIRONMENT)
      process.exit(1);
      break;
    default:
      log.error(client, error, CONFIG.AZURE.ENVIRONMENT)
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind)
}

process.on('uncaughtException', function(e){
  console.log(e);
});

module.export = server