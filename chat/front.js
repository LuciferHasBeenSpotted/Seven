const SOCKET = io();
const INPUT = document.querySelector('#message');
const BTN = document.querySelector('#btn');
const OUT = document.querySelector('#messages');
const PSEUDO = document.querySelector('#pseudo');

BTN.addEventListener('click', e => {
    e.preventDefault();
    if(INPUT.value.length < 1) return;
    const time = `${new Date().getHours()} : ${new Date().getMinutes()}`;
    const pseudo = PSEUDO.value || 'Anonyme';
    SOCKET.emit('new', `${time} ${pseudo} : ${INPUT.value}`);
    INPUT.value = '';
});


SOCKET.on('new', msg => {
    const message = document.createElement('p');
    message.textContent = msg;
    OUT.appendChild(message);
});
