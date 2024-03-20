import toDo from './toDo.js';

export default class project {
    static projectCounter = 0;
    toDoList = [];
    constructor(name) {
        this.name = name;
        this.index = project.projectCounter++;
    }

    addTodo(title, description, dueDate, priority) {
        const newToDo = new toDo(title, description, dueDate, priority);
        this.toDoList.push(newToDo);
    }

    listAllToDo() {
        console.log({...this.toDoList});
    }

}