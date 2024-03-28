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

export {projectsToStorage};