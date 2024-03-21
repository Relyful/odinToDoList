import projectsContainer from "./projectContainer";

export default function drawAllToDo(projectIndex) {
    let target = document.querySelector('main')
        projectsContainer.projectsArray[projectIndex].listAllToDo().forEach(element => {
        const newCard = document.createElement('div');
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