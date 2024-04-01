import projectsContainer from "./projectContainer";
import project from "./project";


function projectsToStorage() {
    let projectsForParse = [];
    projectsContainer.projectsArray.forEach(element => {
        let name = element.name;
        let index = element.index;
        let thisProj = {name, index};
        projectsForParse = projectsForParse.concat(thisProj);
    });
    localStorage.removeItem("parsedProjects");
    localStorage.setItem("parsedProjects", JSON.stringify(projectsForParse));
}

function toDosToStorage() {
    let allToDos = projectsContainer.listAllToDos();
    localStorage.removeItem("parsedToDos");
    localStorage.setItem("parsedToDos", JSON.stringify(allToDos));
}
function loadProjectsFromStorage () {
    if (localStorage.parsedProjects) {
        let parsedProjects = JSON.parse(localStorage.getItem("parsedProjects"));
        localStorage.removeItem("parsedProjects");
        parsedProjects.forEach( element => {
            if (project.projectCounter != element.index) {
                project.projectCounter = element.index;
            }
            projectsContainer.addProject(element.name);
        });
        console.log('Loaded projects from localStorage :)');
    }
    
    else {
        projectsContainer.addProject('Work');
        projectsContainer.addProject('Programming');
        console.log('Loaded as new :)');
    }
}

function loadToDosFromStorage() {
    if (localStorage.parsedToDos) {
        let parsedToDos = JSON.parse(localStorage.getItem("parsedToDos"));
        parsedToDos.forEach( element => {
            let realIndex = projectsContainer.projectsArray.findIndex(elements => elements.index === element.projectIndex);
            if (realIndex == -1 || !projectsContainer.projectsArray[realIndex] ) {
                console.log('Lost ToDo Cleared ' + projectsContainer.projectsArray[realIndex]);
                console.log({realIndex});
            }
            else {
                projectsContainer.projectsArray[realIndex].addToDo(element.title, element.description, element.dueDate, element.priority);
            }            
        })
        console.log('Loaded todos from localStorage :)');
    }
    else {
        projectsContainer.projectsArray[0].addToDo('Send all items to service centre', 'ASAP', '2024-04-17', '2');
        projectsContainer.projectsArray[0].addToDo('Quarterly Inspection', '420', '2024-04-20', '3');
        projectsContainer.projectsArray[1].addToDo('Learn ES Ling', '', '2024-04-09', '2');
        projectsContainer.projectsArray[1].addToDo('Learn React', 'None', '2024-06-30', '3');
        console.log('Loaded as new :)');
    }
}

export {projectsToStorage, toDosToStorage, loadProjectsFromStorage, loadToDosFromStorage};