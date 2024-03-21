import allProjects from './projectContainer.js';
import drawAllToDo from './drawAllToDo.js';

export default function drawAllProjects(array) {
    const main = document.querySelector('main');
    const nav = document.querySelector('nav > .navContainer');
    nav.replaceChildren();
    array.forEach(element => {
        let navRow = document.createElement('div');
        navRow.classList.add('navRow');
        
        const projectButt = document.createElement('button');
        projectButt.innerText = element.name;
        projectButt.dataset.indexNumber = element.index;
        projectButt.addEventListener('click', () => {
            main.replaceChildren();
            drawAllToDo(array.findIndex((e) => e.index == element.index));
        })
        navRow.appendChild(projectButt);
        
        
        const deleteProjectButt = document.createElement('button');
        deleteProjectButt.addEventListener('click', () => {
            //find object where index is same as elements index and delete it
            allProjects.deleteProject(array.findIndex((e) => e.index == element.index));            
            drawAllProjects(allProjects.projectsArray);
        })
        navRow.appendChild(deleteProjectButt);
        nav.appendChild(navRow);
    });
}