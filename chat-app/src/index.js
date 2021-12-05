const path = require('path')
const http = require('http')
const socketio = require('socket.io');
const express = require('express');

const app = express();
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// let count = 0
let welcomeMessage = "Welcome !"
io.on('connection', (socket) => {
  console.log('New WebSocket connection!');
  // socket.emit('countUpdated', count)

  // socket.on('increment', () => {
  //   count++
  //   io.emit('countUpdated', count);
  // })

  socket.emit('welcome', welcomeMessage)

  socket.on('sendMessage', (message) => {
       io.emit('welcome', message)
  })

})

server.listen(port, () => {
  console.log('App is listening on port' + port);
});
