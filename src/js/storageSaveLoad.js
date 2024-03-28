import projectsContainer from "./projectContainer";


function projectsToStorage() {
    let projectsForParse = [];
    projectsContainer.projectsArray.forEach(element => {
        projectsForParse.push(element.name);
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
            projectsContainer.addProject(element);
        });
        console.log('Loaded projects from localStorage :)');
    }
    else {
        projectsContainer.addProject('bike');
        projectsContainer.addProject('work');
        console.log('Loaded as new :)');
    }
}

function loadToDosFromStorage() {
    if (localStorage.parsedToDos) {
        let parsedToDos = JSON.parse(localStorage.getItem("parsedToDos"));        

        parsedToDos.forEach( element => {
            projectsContainer.projectsArray[element.projectIndex].addToDo(element.title, element.description, element.dueDate, element.priority);
        })
        console.log('Loaded todos from localStorage :)');
    }
    else {
        projectsContainer.projectsArray[0].addToDo('Marek', 'Co ti povim?2', '0', '2');
        projectsContainer.projectsArray[1].addToDo('Fabo', 'Co ti nepovim?', '0', '2');
        projectsContainer.projectsArray[1].addToDo('Sven', 'Co ti nepovim?', '0', '3');
        console.log('Loaded as new :)');
    }
}

export {projectsToStorage, toDosToStorage, loadProjectsFromStorage, loadToDosFromStorage};