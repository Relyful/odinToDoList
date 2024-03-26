import projectsContainer from "./projectContainer";
import plusIMG from '../img/add_circle.svg';
import newToDoDialog from "./newToDoDialog";
import editToDoDialog from "./editToDoDialog";

const newToDo = document.querySelector('#newToDo');
const toDoRowButton = document.querySelector('#toDoRowButton');
const toDoTitle = document.querySelector('#toDoTitle');
const toDoDescription = document.querySelector('#toDoDescription');
const toDoDate = document.querySelector('#toDoDate');
const toDoPriority = document.querySelector('#toDoPriority');
const newToDoForm = document.querySelector('#newToDoForm');

export default function drawAllToDo(projectIndex) {
    let target = document.querySelector('main');
    target.replaceChildren();
    const addNewButton = document.createElement('div');
    const addNewImage = new Image();
    addNewImage.src = plusIMG;
    addNewImage.classList.add('plusIMG');
    addNewButton.classList.add('newTodoButton');
    addNewButton.appendChild(addNewImage);
    addNewButton.addEventListener('click', (e) => {
        newToDoForm.reset();
        console.log(projectIndex);
        newToDo.dataset.projectIndex = projectIndex;
        let submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.type = 'button';
        submitButton.id = 'toDoFormSubmit';
        toDoRowButton.replaceChildren();
        toDoRowButton.appendChild(submitButton);
        newToDoDialog();
        newToDo.showModal();
    })
    target.appendChild(addNewButton);
    

    projectsContainer.projectsArray[projectIndex].listAllToDo().forEach(element => {
        const newCard = document.createElement('div');        
        newCard.dataset.toDoIndex = element.index;        
        newCard.classList.add('toDoCard');
        let cardTitle = document.createElement('div');
        cardTitle.classList.add('cardTitle');
        cardTitle.innerText = element.title;
        let cardDate = document.createElement('div');
        cardDate.classList.add('cardDate');
        cardDate.innerText = element.dueDate;

        newCard.addEventListener('click', (e) => {
            newToDoForm.reset();
            toDoTitle.value = element.title;
            toDoDescription.value = element.description;
            console.log(element.description);
            toDoDate.value = element.dueDate;
            toDoPriority.value = element.priority;

            newToDo.dataset.toDoIndex = element.index;
            newToDo.dataset.projectIndex = projectIndex;
            let submitEditButton = document.createElement('button');
            submitEditButton.textContent = 'Submit';
            submitEditButton.type = 'button';
            submitEditButton.id = 'toDoEditFormSubmit';
            let deleteToDoButton = document.createElement('button');
            deleteToDoButton.textContent = 'Delete';
            deleteToDoButton.type = 'button';
            deleteToDoButton.id = 'deleteToDoButton';
            toDoRowButton.replaceChildren();
            toDoRowButton.appendChild(submitEditButton);
            toDoRowButton.appendChild(deleteToDoButton);

            editToDoDialog();
            newToDo.showModal();
        })
        
        newCard.append(cardTitle, cardDate);
        target.appendChild(newCard);        
    });
}