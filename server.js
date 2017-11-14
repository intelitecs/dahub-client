const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const reload = require('reload');

const debug = require('debug')('dahub-client:server');
app.use(express.static(path.join(__dirname, 'dist')));

const port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

// create HTTP server.
const server = http.createServer(app);


/**
 * Listen on provided port, on all network interfaces.
 */

 server.listen(port, onListening);
 server.on('error', onError);
 //server.on('request',onRequest);

// reload browser when code changes
//reload(app);

 /**
 	For all GET requests, send back index.html, so that PathLocationStrategy can be used.
 */

 app.get('/*', (request, response, next) => {
 	response.sendFile(path.join(__dirname + '/dist/index.html'));

 });

 /**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    const port = parseInt(val, 10);

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
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */

  function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;

    debug('Listening on ' + bind);
    console.log('The server is running on ', server.address());
  }

  function onRequest(request, response, next){
    console.log(request.method + ': '+ request.url + '    '+ response.statusCode + '  '+ response.statusText);
  };

