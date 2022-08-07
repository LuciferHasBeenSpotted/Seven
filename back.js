const express = require('express');
const APP = express();
const SERVER = require('http').createServer(APP);
const IO = require('socket.io')(SERVER);

APP.use(express.static(__dirname));

APP.get('/', (req, res) => res.sendFile(`${process.cwd()}/index.html`));

IO.on('connection', socket => socket.on('new', msg => IO.emit('new', msg)));

SERVER.listen(8080, () => console.log('On: 8080'));
