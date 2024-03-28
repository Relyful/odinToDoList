export default class toDo {
    static counter = 0;

    constructor(title, description, dueDate, priority, projectIndex) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.index = toDo.counter++;
        this.projectIndex = projectIndex;
    }    
}