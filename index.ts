const express = require('express');
const app = express();
const cors = require('cors');
const { Server } = require("socket.io");
const http = require('http');

app.use(cors())
const server = http.createServer(app);

const io = new Server(server, {
  cors: {origin:"http://localhost:8081", methods: ["GET", "POST"]},
});

io.on('connection', (socket) => {

  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log("Chat message: "+msg)
    io.emit('chat message', msg);
  });
});

server.listen(8080, () => {
  console.log('server listening on port 8080')
})

app.get('/', (req, res) => {
  res.send('Hello from our server!')
})