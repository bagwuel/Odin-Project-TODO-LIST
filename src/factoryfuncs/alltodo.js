import Project from "./project"


const fn_allTodo = (() => {
    let allTodo = []
    
    const populateTodo = () => {
        const untitled = Project('Untitled', new Date().getTime())
        allTodo = JSON.parse(localStorage.getItem('alltodo')) || [untitled.getProjCon()];
    }

    const getAllTodo = () => allTodo

    const getProject = (id) => allTodo.filter(value => value[0] === id)[0]

    const addProject = (project) => {
        allTodo = [...allTodo, project]
    }
    
    const removeProject = (id) => {
        allTodo = allTodo.filter(value => value[0] !== id)
    }
    
    const updateProject = (id, project) => {
        const projectsPos = allTodo.findIndex(value => value[0] === id)
        allTodo.splice(projectsPos, 1, project)
    }

    return {
        getProject,
        getAllTodo,
        addProject,
        populateTodo,
        removeProject,
        updateProject
    }
})()

export default fn_allTodo