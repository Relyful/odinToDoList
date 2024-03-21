import project from './project.js';

class allProjects {
    projectsArray = [];

    addProject(name) {
        const newProject = new project(name);
        this.projectsArray.push(newProject);
    }

    deleteProject(index) {
        this.projectsArray.splice(index, 1);
    }
}

let projectsContainer = new allProjects;

export default projectsContainer;