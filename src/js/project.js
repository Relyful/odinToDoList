import toDo from './toDo.js';

export default class project {
    static projectCounter = 0;
    toDoList = [];
    constructor(name) {
        this.name = name;
        this.index = project.projectCounter++;
    }

    addTodo(title, description, dueDate, priority) {
        const projectIndex = this.index;
        const newToDo = new toDo(title, description, dueDate, priority, projectIndex);
        this.toDoList.push(newToDo);
    }

    editToDo(index, title, description, dueDate, priority) {
        const toDo = this.toDoList[index];
        toDo.title = title;
        toDo.description = description;
        toDo.dueDate = dueDate;
        toDo.priority = priority;
    }

    deleteToDo(index) {
        this.toDoList.splice(index, 1);
    }

    listAllToDo() {
        return [...this.toDoList];
    }

}