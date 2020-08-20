import OpenSocket from 'socket.io-client';
const socket = OpenSocket('http://localhost:3001');

function connectToRoom(cb) {
    socket.on('connect')
}

export { connectToRoom };