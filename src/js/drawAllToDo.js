export default function drawAllToDo(array) {
    let target = document.querySelector('main')
    array.forEach(element => {
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