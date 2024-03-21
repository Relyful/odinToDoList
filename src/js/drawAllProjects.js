import allProjects from './projectContainer.js';

export default function drawAllProjects(array) {
    const nav = document.querySelector('nav');
    nav.replaceChildren();
    array.forEach(element => {
        let navRow = document.createElement('div');
        navRow.classList.add('navRow');
        
        const projectButt = document.createElement('button');
        projectButt.innerText = element.name;
        projectButt.dataset.indexNumber = element.index;
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