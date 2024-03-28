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

    listAllToDos() {
        let allToDos = [];
        this.projectsArray.forEach( element => {            
            allToDos = allToDos.concat(element.listAllToDo())
        })
        return allToDos;
    }
}

let projectsContainer = new allProjects;

export default projectsContainer;