import './styles.css';

const body = document.querySelector('body');
body.classList.add('styleTest');

let hey = document.createElement('div');
hey.innerText = 'Hey';
body.appendChild(hey);