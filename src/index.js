import './styles.css';
import project from './js/project.js';
import projectContainer from './js/projectContainer.js';
import drawAllProjects from './js/drawAllProjects.js';
import drawAllToDo from './js/drawAllToDo.js';
import newProjDialog from './js/newProjDialog.js';

const body = document.querySelector('body');
body.classList.add('styleTest');

newProjDialog();

/////////////////////////////////////////////
projectContainer.addProject('bike');
projectContainer.addProject('work');


projectContainer.projectsArray[0].addTodo('Marko', 'Co ti povim?', '0', '3');
projectContainer.projectsArray[0].addTodo('Denis', 'Co ti povim?1', '0', '1');
projectContainer.projectsArray[0].addTodo('Marek', 'Co ti povim?2', '0', '2');

projectContainer.projectsArray[1].addTodo('Marko', 'Co ti nepovim?', '0', '1');
projectContainer.projectsArray[1].addTodo('Filip', 'Co ti nepovim?', '0', '1');
projectContainer.projectsArray[1].addTodo('Fabo', 'Co ti nepovim?', '0', '2');
projectContainer.projectsArray[1].addTodo('Sven', 'Co ti nepovim?', '0', '3');

projectContainer.projectsArray[0].listAllToDo();
projectContainer.projectsArray[1].listAllToDo();
////////////////////////////////////////////////

console.log([projectContainer.projectsArray]);
let stringifiedArray = JSON.stringify(projectContainer.projectsArray);
console.log(stringifiedArray);
let parsedArray = JSON.parse(stringifiedArray);
console.log(parsedArray);
// projectContainer.projectsArray = parsedArray;

drawAllProjects();
console.log(projectContainer.projectsArray[1].listAllToDo());

drawAllToDo(0);