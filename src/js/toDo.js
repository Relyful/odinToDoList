export default class toDo {
    static counter = 0;

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.index = toDo.counter++;
    }    
}