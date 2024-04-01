import projectContainer from "./projectContainer";
import drawAllProjects from "./drawAllProjects";

const newProjCloseDialog = document.querySelector('#newProjCloseDialog');
const submitNewProjButt = document.querySelector('#newProjForm > button');
const newProjectButton = document.querySelector('#newProjButt');
const newProjDialog = document.querySelector('#newProject');
const titleInput = document.querySelector('#proTitle');

function submitNewProject() {
        projectContainer.addProject(titleInput.value);
        document.querySelector('#newProjForm').reset();
        drawAllProjects();
        newProjDialog.close();
};

export default function() {
    newProjectButton.addEventListener('click', () => {
        newProjDialog.showModal();
    });
    
    submitNewProjButt.addEventListener('click', () => {
        submitNewProject();
    });

    titleInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            submitNewProject();
        }
    });
    
    newProjCloseDialog.addEventListener('click', () => newProjDialog.close());
};