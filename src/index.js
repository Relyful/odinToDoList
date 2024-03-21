import './styles.css';
import project from './js/project.js';
import projectContainer from './js/projectContainer.js';
import drawAllProjects from './js/drawAllProjects.js';

const body = document.querySelector('body');
body.classList.add('styleTest');

projectContainer.addProject('bike');
projectContainer.addProject('work');


projectContainer.projectsArray[0].addTodo('Marko', 'Co ti povim?', '0', '0');
projectContainer.projectsArray[0].addTodo('Denis', 'Co ti povim?1', '0', '0');
projectContainer.projectsArray[0].addTodo('Marek', 'Co ti povim?2', '0', '0');

projectContainer.projectsArray[1].addTodo('Marko', 'Co ti nepovim?', '0', '0');
projectContainer.projectsArray[1].addTodo('Filip', 'Co ti nepovim?', '0', '0');
projectContainer.projectsArray[1].addTodo('Fabo', 'Co ti nepovim?', '0', '0');
projectContainer.projectsArray[1].addTodo('Sven', 'Co ti nepovim?', '0', '0');

projectContainer.projectsArray[0].listAllToDo();
projectContainer.projectsArray[1].listAllToDo();

console.log(projectContainer.projectsArray[0].toDoList[0].title);
projectContainer.projectsArray[0].toDoList[0].title = 'Kokotko';
console.log(projectContainer.projectsArray[0].toDoList[0].title);

drawAllProjects(projectContainer.projectsArray);
console.log(projectContainer.projectsArray[1].listAllToDo());