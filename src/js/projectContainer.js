import project from './project.js';
import { projectsToStorage } from './storageSaveLoad.js';

class allProjects {
    projectsArray = [];

    addProject(name) {
        const newProject = new project(name);
        this.projectsArray.push(newProject);
        projectsToStorage();
    }

    deleteProject(index) {
        this.projectsArray.splice(index, 1);
        projectsToStorage();
    }
}

let projectsContainer = new allProjects;

export default projectsContainer;