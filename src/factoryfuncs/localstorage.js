import fn_allTodo from "./alltodo";

function setLocalStorage() {
    localStorage.setItem('alltodo', JSON.stringify(fn_allTodo.getAllTodo()))
}

export default setLocalStorage