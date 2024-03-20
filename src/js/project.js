import toDo from './toDo.js';

export default class project {
    toDoList = [];
    constructor(name) {
        this.name = name;
    }

    addTodo(title, description, dueDate, priority) {
        const newToDo = new toDo(title, description, dueDate, priority);
        this.toDoList.push(newToDo);
    }

    listAllToDo() {
        console.log({...this.toDoList});
    }

}