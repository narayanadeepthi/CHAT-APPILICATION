// script.js
const socket = io();

// Get elements
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');

// Listen for new messages
socket.on('newMessage', (message) => {
  const newMessageDiv = document.createElement('div');
  newMessageDiv.textContent = message;
  messagesDiv.appendChild(newMessageDiv);
});

// Handle send button click
sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  socket.emit('newMessage', message);
  messageInput.value = '';
});
