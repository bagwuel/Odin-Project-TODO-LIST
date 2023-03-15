import createProject from "./components/project/project"
import createProjectForm from "./components/projectform/projectform"
import createTodo from "./components/todo/todo"
import fn_allTodo from "./factoryfuncs/alltodo"
import Project from "./factoryfuncs/project"
import "./index.css"

const addProjectBtn = document.querySelector('#addproject')
const showAllTodo = document.querySelector('#alltodos')
const header = document.querySelector('header')



window.addEventListener('load', () => {
    fn_allTodo.populateTodo()
    const alltd = fn_allTodo.getAllTodo()
    // console.log(fn_allTodo.getAllTodo());
    alltd.forEach(project => {
        const [id, name] = project
        const newProject = Project(name, id)
        const proj = createProject(newProject, name, id)
        const todoDiv = proj.querySelector('.tododiv')
        project.forEach(todo => {
            if (typeof todo === 'object') {
                const domTodo = createTodo(newProject, todo)
                todoDiv.appendChild(domTodo)
                if (todo.done) {
                    domTodo.querySelector('#done').checked = true
                    domTodo.classList.add('done')
                }
            }
        })
        if (project[2] === 'Show') {
            proj.querySelector('.showhide').textContent = 'Show'
            todoDiv.style.display = 'none'
        }
        showAllTodo.appendChild(proj)
    })
})

function handleCreateProject(e) {
    e.preventDefault()
    const formData = new FormData(this)
    const projectName = formData.get('name')
    const newProject = Project(projectName, new Date().getTime())
    fn_allTodo.addProject(newProject.getProjCon())
    localStorage.setItem('alltodo', JSON.stringify(fn_allTodo.getAllTodo())) 
    const proj = createProject(newProject, projectName, newProject.getProjId())
    showAllTodo.appendChild(proj) 
    this.remove() 
}



addProjectBtn.addEventListener('click', () => {
    const prevProjectForm = document.querySelector('#project')
    if (prevProjectForm)
        prevProjectForm.remove()
    const projectForm = createProjectForm()
    projectForm.addEventListener('submit', handleCreateProject)
    header.insertBefore(projectForm, header.lastChild);
})

