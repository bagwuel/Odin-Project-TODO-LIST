import "./todo.css"
import fn_allTodo from "../../factoryfuncs/alltodo";
import createShowMoreElement from "../showmore/showmore";
import createTodoForm from "../todoform/todoform";
import setLocalStorage from "../../factoryfuncs/localstorage";

function createTodo(project, todo) {
const {id, title, description, dueDate, priority, notes} = todo
const showAllTodo = document.querySelector('#alltodos')
const header = document.querySelector('header')



    const body = document.querySelector('body')

    function handleDone() {
        const container = document.querySelector(`.todocontainer${id}`)
        if(this.checked === true) {
            container.classList.add('done')
            todo.done = true
        }else {
            container.classList.remove('done')
            todo.done = false
        }
        setLocalStorage()
    }

    function showMore() {
        const showMoreEl = document.querySelector('.showmore')
        if (showMoreEl)
            showMoreEl.remove()
        const {title, description, dueDate, priority, notes, done} = todo
        const more = createShowMoreElement(title, description, dueDate, priority, notes, done)
        header.insertBefore(more, header.lastChild);
    }

    function priorityColor(priorityCol) {
        switch (priorityCol) {
            case 'high':
                return 'red'        
            case 'medium':
                return 'orange'        
            case 'low':
                return 'green'        
            default:
                break;
        }
    }

    function removeTodo() {
        let thisProject = fn_allTodo.getProject(project.getProjId())
        thisProject = thisProject.filter(item => {
            if (item.id)
                return item.id !== id
            else if (!item.id)
                return item
        })
        fn_allTodo.updateProject(thisProject[0], thisProject)
        const container = document.querySelector(`.todocontainer${id}`)
        container.remove()
        setLocalStorage()
    }

    function createEditBtn() {
        const editBtn = document.createElement('button')
        editBtn.setAttribute("type", "button");
        editBtn.classList.add('editbtn')
        editBtn.textContent = 'Edit'
        editBtn.addEventListener('click', editTodo)
        return editBtn
      }

    function editTodo() {
        const todoForm = document.querySelector('#todo')
        const container = document.querySelector(`.todocontainer${id}`);
        const formData = new FormData(todoForm)
        const formObj = Object.fromEntries(formData)
        container.querySelector('.title').textContent = formObj.title
        // container.querySelector('.description').textContent = formObj.description
        container.querySelector('.date').textContent = formObj.dueDate
        container.style.borderLeftColor = priorityColor(formObj.priority)
        todo = Object.assign(todo, formObj)
        setLocalStorage()
        todoForm.remove()
    }


    function handleEdit() {
        const prevTodoForm = document.querySelector('#todo')
        if (prevTodoForm)
            prevTodoForm.remove()
        const todoForm = createTodoForm()
        header.insertBefore(todoForm, header.lastChild);
        const submitBtn = todoForm.querySelector('#submit')
        submitBtn.classList.add('hide')
        todoForm.appendChild(createEditBtn())
        
        const inputs = todoForm.querySelectorAll('input[type="text"], input[type="date"], select, textarea')
        const {title, description, dueDate, priority, notes} = todo
        const todoVals = [title, description, dueDate, priority, notes]
        inputs.forEach((input, index) => input.value = todoVals[index]);
    }


    function generateTodoContainer() {
        const container = document.createElement('div');
        container.classList.add( 'todocontainer',`todocontainer${id}`);

        const doneInput = document.createElement('input');
        doneInput.setAttribute('type', 'checkbox');
        doneInput.setAttribute('name', 'done');
        doneInput.setAttribute('id', 'done');
        doneInput.classList.add('todoid');
        doneInput.addEventListener('change', handleDone)
        container.appendChild(doneInput);
      
        const titleEl = document.createElement('p');
        titleEl.classList.add('title');
        titleEl.textContent = title;
        container.appendChild(titleEl);
      
        // const descriptionEl = document.createElement('p');
        // descriptionEl.classList.add('description');
        // descriptionEl.textContent = description;
        // container.appendChild(descriptionEl);
      
        const dateInput = document.createElement('p');
        dateInput.classList.add('date');
        dateInput.textContent = dueDate
        container.appendChild(dateInput);
      
        const moreEl = document.createElement('p');
        moreEl.classList.add('more', 'todoid');
        moreEl.textContent = 'More';
        moreEl.addEventListener('click', showMore)
        container.appendChild(moreEl);
      
        const editEl = document.createElement('p');
        editEl.classList.add('edit', 'todoid');
        editEl.textContent = 'Edit';
        editEl.addEventListener('click', handleEdit)
        container.appendChild(editEl);
    
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('type', 'button');
        deleteButton.classList.add('todoid');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', removeTodo)
        container.appendChild(deleteButton);

        container.style.borderLeftColor = priorityColor(priority)
      
        return container;
    }
    return generateTodoContainer()
          
}


export default createTodo