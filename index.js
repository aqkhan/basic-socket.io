const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.json({
        "message": "success"
    })
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(process.env.PORT || 8000, () => {
    console.log('listening on *:8000');
});
