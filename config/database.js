const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/react-chat-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

db.on('connected', () => {
    console.log(`MongoDB is connected to ${db.host}:${db.port}`)
});