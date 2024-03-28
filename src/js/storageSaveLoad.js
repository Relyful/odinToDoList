import projectsContainer from "./projectContainer";


function projectsToStorage() {
    let projectsForParse = [];
    projectsContainer.projectsArray.forEach(element => {
        projectsForParse.push(element.name);
    });
    localStorage.removeItem("parsedProjects");
    localStorage.setItem("parsedProjects", JSON.stringify(projectsForParse));
    console.log(localStorage.parsedProjects);
}

function toDosToStorage() {
    let allToDos = projectsContainer.listAllToDos();
    localStorage.removeItem("parsedToDos");
    localStorage.setItem("parsedToDos", JSON.stringify(allToDos));
    console.log(localStorage.parsedToDos);
}

export {projectsToStorage, toDosToStorage};