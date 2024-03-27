import projectsContainer from "./projectContainer";
import drawAllToDo from "./drawAllToDo";
import { format } from "date-fns"; 

const toDoRowButton = document.querySelector('#toDoRowButton');
const newToDoCloseDialog = document.querySelector('#newToDoCloseDialog');

export default function() {
    const toDoEditSubmit = document.querySelector('#toDoEditFormSubmit');
    const toDoDelete = document.querySelector('#deleteToDoButton');
    const newToDoForm = document.querySelector('#newToDoForm');
    const newToDoDialog = document.querySelector('#newToDo');
    const toDoTitle = document.querySelector('#toDoTitle');
    const toDoDescription = document.querySelector('#toDoDescription');
    const toDoDate = document.querySelector('#toDoDate');
    const toDoPriority = document.querySelector('#toDoPriority');      
    
    toDoEditSubmit.addEventListener('click', (e) => {
        let thisToDoIndex = e.target.parentElement.parentElement.parentElement.dataset.toDoIndex;
        let thisProjectIndex = e.target.parentElement.parentElement.parentElement.dataset.projectIndex;
        let thisProjectArray = projectsContainer.projectsArray[thisProjectIndex].listAllToDo();
        let realToDoIndex = thisProjectArray.findIndex(element => element.index == thisToDoIndex);
        console.log({realToDoIndex, thisToDoIndex, thisProjectIndex});

        projectsContainer.projectsArray[thisProjectIndex].editToDo(realToDoIndex, toDoTitle.value, toDoDescription.value, toDoDate.value , toDoPriority.value);
        console.log(projectsContainer.projectsArray[thisProjectIndex]);
        drawAllToDo(thisProjectIndex);
        newToDoForm.reset();
        newToDoDialog.close();
        toDoRowButton.replaceChildren();
    });

    toDoDelete.addEventListener('click', (e) => {
        let thisToDoIndex = e.target.parentElement.parentElement.parentElement.dataset.toDoIndex;
        let thisProjectIndex = e.target.parentElement.parentElement.parentElement.dataset.projectIndex;
        let thisProjectArray = projectsContainer.projectsArray[thisProjectIndex].listAllToDo();
        let realToDoIndex = thisProjectArray.findIndex(element => element.index == thisToDoIndex);

        projectsContainer.projectsArray[thisProjectIndex].deleteToDo(realToDoIndex);
        drawAllToDo(thisProjectIndex);
        newToDoForm.reset();
        newToDoDialog.close();
        toDoRowButton.replaceChildren();
    })

    newToDoCloseDialog.addEventListener('click', () => newToDoDialog.close());
};