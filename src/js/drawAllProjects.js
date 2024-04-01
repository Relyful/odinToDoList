import allProjects from './projectContainer.js';
import drawAllToDo from './drawAllToDo.js';
import projectsContainer from './projectContainer.js';

export default function drawAllProjects(array = projectsContainer.projectsArray) {
    const main = document.querySelector('main');
    const nav = document.querySelector('nav > .navContainer');
    
    
    nav.replaceChildren();
    array.forEach(element => {
        let navRow = document.createElement('div');
        navRow.classList.add('navRow');
        
        const projectButt = document.createElement('button');
        projectButt.classList.add('projectButton');
        projectButt.innerText = element.name;
        projectButt.dataset.indexNumber = element.index;
        projectButt.addEventListener('click', (oriE) => {
            drawAllToDo(array.findIndex((e) => e.index === element.index));
            if (sessionStorage.lastClickedProj) {
                nav.children[sessionStorage.lastClickedProj].classList.remove("activeButt");
            }
            sessionStorage.setItem("lastClickedProj", array.findIndex((e) => e.index === element.index));
            oriE.target.parentNode.classList.add("activeButt");
        })
        navRow.appendChild(projectButt);
        
        
        
        const deleteProjectButt = document.createElement('button');
        deleteProjectButt.innerText = '❌';
        deleteProjectButt.classList.add('deleteProjectButton');
        deleteProjectButt.addEventListener('click', () => {
            //find object where index is same as elements index and delete it
            allProjects.deleteProject(array.findIndex((e) => e.index === element.index));            
            main.replaceChildren();
            drawAllProjects(allProjects.projectsArray);
        })
        navRow.appendChild(deleteProjectButt);
        nav.appendChild(navRow);
        if (sessionStorage.lastClickedProj) {
            nav.children[sessionStorage.lastClickedProj].classList.add("activeButt");
        }
    });
}