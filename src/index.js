import './styles.css';
import drawAllProjects from './js/drawAllProjects.js';
import drawAllToDo from './js/drawAllToDo.js';
import newProjDialog from './js/newProjDialog.js';
import { loadProjectsFromStorage, loadToDosFromStorage } from './js/storageSaveLoad.js';

newProjDialog();

loadProjectsFromStorage();
drawAllProjects();

loadToDosFromStorage();
drawAllToDo(0);