import toDo from './toDo.js';
import { toDosToStorage } from './storageSaveLoad.js';

export default class project {
    static projectCounter = 0;
    toDoList = [];
    constructor(name) {
        this.name = name;
        this.index = project.projectCounter++;
    }

    addToDo(title, description, dueDate, priority) {
        const projectIndex = this.index;
        const newToDo = new toDo(title, description, dueDate, priority, projectIndex);
        this.toDoList.push(newToDo);
        toDosToStorage();
    }

    editToDo(index, title, description, dueDate, priority) {
        const toDo = this.toDoList[index];
        toDo.title = title;
        toDo.description = description;
        toDo.dueDate = dueDate;
        toDo.priority = priority;
        toDosToStorage();
    }

    deleteToDo(index) {
        this.toDoList.splice(index, 1);
        toDosToStorage();
    }

    listAllToDo() {
        return [...this.toDoList];
    }

}