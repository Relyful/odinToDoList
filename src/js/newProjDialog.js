import projectContainer from "./projectContainer";
import drawAllProjects from "./drawAllProjects";

const newProjCloseDialog = document.querySelector('#newProjCloseDialog');
const submitNewProjButt = document.querySelector('#newProjForm > button');
const newProjectButton = document.querySelector('#newProjButt');
const newProjDialog = document.querySelector('#newProject');

export default function() {
    newProjectButton.addEventListener('click', () => {
        newProjDialog.showModal();
    })
    
    submitNewProjButt.addEventListener('click', () => {
        const newProjTitleInput = document.querySelector('#proTitle').value;
        projectContainer.addProject(newProjTitleInput);
        document.querySelector('#newProjForm').reset();
        drawAllProjects(projectContainer.projectsArray);
        newProjDialog.close();
    })
    
    newProjCloseDialog.addEventListener('click', () => newProjDialog.close());
};