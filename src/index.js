import './styles.css';
import project from './js/project.js';

const body = document.querySelector('body');
body.classList.add('styleTest');
let hey = document.createElement('div');
hey.innerText = 'Hey';
body.appendChild(hey);

let bike = new project('Bike');
bike.addTodo('Marko', 'Co ti povim?', '0', '0');
bike.addTodo('Denis', 'Co ti povim?1', '0', '0');
bike.addTodo('Marek', 'Co ti povim?2', '0', '0');

let work = new project('Work');
work.addTodo('Marko', 'Co ti nepovim?', '0', '0');
work.addTodo('Filip', 'Co ti nepovim?', '0', '0');
work.addTodo('Fabo', 'Co ti nepovim?', '0', '0');
work.addTodo('Sven', 'Co ti nepovim?', '0', '0');

bike.listAllToDo();
work.listAllToDo();

console.log(bike.toDoList[0].title);
bike.toDoList[0].title = 'Kokotko';
console.log(bike.toDoList[0].title);
