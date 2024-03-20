import './styles.css';
import project from './js/project.js';
import allProjects from './js/projectContainer.js';
import drawAllProjects from './js/drawAllProjects.js';

const body = document.querySelector('body');
body.classList.add('styleTest');

let projects = new allProjects();
projects.addProject('bike');
projects.addProject('work');


projects.projectsArray[0].addTodo('Marko', 'Co ti povim?', '0', '0');
projects.projectsArray[0].addTodo('Denis', 'Co ti povim?1', '0', '0');
projects.projectsArray[0].addTodo('Marek', 'Co ti povim?2', '0', '0');

projects.projectsArray[1].addTodo('Marko', 'Co ti nepovim?', '0', '0');
projects.projectsArray[1].addTodo('Filip', 'Co ti nepovim?', '0', '0');
projects.projectsArray[1].addTodo('Fabo', 'Co ti nepovim?', '0', '0');
projects.projectsArray[1].addTodo('Sven', 'Co ti nepovim?', '0', '0');

projects.projectsArray[0].listAllToDo();
projects.projectsArray[1].listAllToDo();

console.log(projects.projectsArray[0].toDoList[0].title);
projects.projectsArray[0].toDoList[0].title = 'Kokotko';
console.log(projects.projectsArray[0].toDoList[0].title);

drawAllProjects(projects.projectsArray);