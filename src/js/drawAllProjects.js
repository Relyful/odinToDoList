export default function drawAllProjects(array) {
    const nav = document.querySelector('nav');
    array.forEach(element => {
        const projectButt = document.createElement('button');
        projectButt.innerText = element.name;
        nav.appendChild(projectButt);
    });
}