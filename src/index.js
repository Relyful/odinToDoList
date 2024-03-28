import './styles.css';
import projectContainer from './js/projectContainer.js';
import drawAllProjects from './js/drawAllProjects.js';
import drawAllToDo from './js/drawAllToDo.js';
import newProjDialog from './js/newProjDialog.js';
import { loadProjectsFromStorage, loadToDosFromStorage } from './js/storageSaveLoad.js';

const body = document.querySelector('body');
body.classList.add('styleTest');

newProjDialog();

/////////////////////////////////////////////




////////////////////////////////////////////////

loadProjectsFromStorage();
drawAllProjects();

loadToDosFromStorage();
drawAllToDo(0);