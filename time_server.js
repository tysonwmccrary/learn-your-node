var net = require('net');

var server = net.createServer(function (socket) {
    var d = new Date();
    var month = doubleDigit(d.getMonth() + 1);
    var dateString = d.getFullYear() + '-' + month + '-' + doubleDigit(d.getDate()) + ' ' + doubleDigit(d.getHours()) + ':' + doubleDigit(d.getMinutes()) + '\n';
    // socket.write(dateString);
    // socket.end();
    socket.end(dateString);
});

server.listen(process.argv[2]);

function doubleDigit(value) {
    if (value < 10) {
        return '0' + value;
    } else {
        return String(value);
    }
}