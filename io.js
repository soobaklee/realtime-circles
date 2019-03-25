var io = require('socket.io')();

// first arg is name of message 'connection' 
//socket represents client (io is the server)
io.on('connection', function (socket) {

    socket.on('add-circle', function (data) {
        io.emit('add-circle', data);
    });

    socket.on('clear-circles', function () {
        io.emit('clear-circles');
    });
});

module.exports = io;