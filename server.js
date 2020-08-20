const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

const port = 3001;

require('dotenv').config();
require('./config/database');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Routes
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const server = app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});
const io = require('socket.io').listen(server);


io.sockets.on('connection', (socket) => {
    console.log('user connected');
    socket.on('chat message', (msg) => {
        console.log(msg);
        io.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected')
    });
});