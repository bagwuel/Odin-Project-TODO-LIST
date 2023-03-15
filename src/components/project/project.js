import './project.css'
import ToDo from '../../factoryfuncs/todo'
import fn_allTodo from '../../factoryfuncs/alltodo'
import createTodo from '../todo/todo'
import createTodoForm from '../todoform/todoform'
import setLocalStorage from '../../factoryfuncs/localstorage'
import createProjectForm from '../projectform/projectform'

function createProject(project, name, id) {
    const header = document.querySelector('header')


    function submitHandler () {
        const todoForm = document.querySelector('#todo')
        const formData = new FormData(todoForm)
        const formObj = Object.fromEntries(formData)
        const {title, description, dueDate, priority, notes} = formObj
        const newTodo = new ToDo(new Date().getTime(), title, description, dueDate, priority, notes)
        todoDiv.appendChild(createTodo(project, newTodo))
        return(newTodo);
    }

function handleSubmit(e) {
    e.preventDefault()
    let thisProject = fn_allTodo.getProject(id)
    thisProject.push(submitHandler())
    setLocalStorage()
    this.remove()
}

function handleAddTodo() {
    const prevTodoForm = document.querySelector('#todo')
    if (prevTodoForm) {
        prevTodoForm.remove()
    }
    const todoForm = createTodoForm()
    todoForm.addEventListener('submit', handleSubmit)
    header.insertBefore(todoForm, header.lastChild);
}


function deleteProject() {
    fn_allTodo.removeProject(id)
    projectElement.remove()
    setLocalStorage()
}

function showHideProj() {
    let thisProject = fn_allTodo.getProject(id)
    if (this.textContent === "Hide") {
        thisProject[2] = "Show"
        this.textContent = "Show"
        todoDiv.style.display = 'none'
    }else {
        thisProject[2] = "Hide"
        this.textContent = "Hide"
        todoDiv.style.display = 'block'
    }
    setLocalStorage()
}

function changeProjectName() {
    let thisProject = fn_allTodo.getProject(id)
    thisProject[1] = this.parentElement.name.value
    projectTitleElement.textContent = this.parentElement.name.value
    this.parentElement.remove()
    setLocalStorage()
}

function handleRenameProject() {
    const prevProjectForm = document.querySelector('#project')
    if (prevProjectForm)
        prevProjectForm.remove()
    const projectForm = createProjectForm()
    projectForm.Submit.classList.add('hide')
    projectForm.editprojectname.classList.remove('hide')
    projectForm.editprojectname.addEventListener('click', changeProjectName)
    header.insertBefore(projectForm, header.lastChild);
}

  /* -----------------creating the project---------------- */
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
  
    const projectNameElement = document.createElement("div");
    projectNameElement.classList.add("projectname");
  
    const projectTitleElement = document.createElement("h1");
    projectTitleElement.textContent = name;
    projectNameElement.appendChild(projectTitleElement);

    const buttonElements = document.createElement('div')
    buttonElements.classList.add('projectcontrols')
    projectNameElement.appendChild(buttonElements)

    const rename = document.createElement('button')
    rename.type = "button";
    rename.classList.add("addtodo");
    rename.addEventListener("click", handleRenameProject);
    rename.textContent = "Rename";
    buttonElements.appendChild(rename);

  
    const addTodoButton = document.createElement("button");
    addTodoButton.type = "button";
    addTodoButton.classList.add("addtodo");
    addTodoButton.addEventListener("click", handleAddTodo);
    addTodoButton.textContent = "Add todo";
    buttonElements.appendChild(addTodoButton);

    const removeProjButton = document.createElement("button");
    removeProjButton.type = "button";
    removeProjButton.classList.add("removeproject");
    removeProjButton.addEventListener("click", deleteProject);
    removeProjButton.textContent = "Delete";
    buttonElements.appendChild(removeProjButton);
    
    const showHide = document.createElement("button");
    showHide.type = "button";
    showHide.classList.add("showhide");
    showHide.addEventListener("click", showHideProj);
    showHide.textContent = "Hide";
    buttonElements.appendChild(showHide);
  
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('tododiv')
    projectElement.appendChild(projectNameElement);
    projectElement.appendChild(todoDiv);

  
    return projectElement;
  }
  



export default createProject