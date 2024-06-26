import projectsContainer from "./projectContainer";
import drawAllToDo from "./drawAllToDo";

const toDoRowButton = document.querySelector('#toDoRowButton');
const newToDoCloseDialog = document.querySelector('#newToDoCloseDialog');

export default function() {
    const newToDoSubmit = document.querySelector('#toDoFormSubmit');
    const newToDoForm = document.querySelector('#newToDoForm');
    const newToDoDialog = document.querySelector('#newToDo');
    const toDoTitle = document.querySelector('#toDoTitle');
    const toDoDescription = document.querySelector('#toDoDescription');
    const toDoDate = document.querySelector('#toDoDate');
    const toDoPriority = document.querySelector('#toDoPriority');      
    
    newToDoSubmit.addEventListener('click', (e) => {
        let thisProjectIndex = e.target.parentElement.parentElement.parentElement.dataset.projectIndex

        if (!toDoTitle.value || !toDoDate.value || !toDoPriority.value) {
            console.log('Bad Date Format');
        }
        else {
            projectsContainer.projectsArray[thisProjectIndex].addToDo(toDoTitle.value, toDoDescription.value, toDoDate.value, toDoPriority.value);
        }
        
        drawAllToDo(thisProjectIndex);
        newToDoForm.reset();
        newToDoDialog.close();
        toDoRowButton.replaceChildren();
    })

    newToDoCloseDialog.addEventListener('click', () => newToDoDialog.close());
};