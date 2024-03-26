import projectsContainer from "./projectContainer";
import plusIMG from '../img/add_circle.svg';
import newToDoDialog from "./newToDoDialog";

const newToDo = document.querySelector('#newToDo');
const toDoRowButton = document.querySelector('#toDoRowButton');

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
        console.log(projectIndex);
        newToDo.dataset.projectIndex = projectIndex;
        let submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.type = 'button';
        submitButton.id = 'toDoFormSubmit';
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
        
        newCard.append(cardTitle, cardDate);
        target.appendChild(newCard);
    });
}