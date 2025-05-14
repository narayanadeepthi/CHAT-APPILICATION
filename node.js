// Import required modules
const express = require('express');
const app = express();
const se/rver = require('http').createServer(app);
const io = require('socket.io')(server);

// Store messages in an array
let messages = [];

// Handle socket connection
io.on('connection', (socket) => {
  console.log('New connection');

  // Send existing messages to new client
  socket.emit('messages', messages);

  // Handle new message
  socket.on('newMessage', (message) => {
    messages.push(message);
    io.emit('newMessage', message);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Serve static files
app.use(express.static('public'));

// Start server
server.listen(3000, () => {
  console.log('Server started on port 3000');
});
