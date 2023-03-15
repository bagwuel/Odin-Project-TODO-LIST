class ToDo {
    constructor(id, title, description, dueDate, priority, notes) {
        this.id = id
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        this.done = false 
    }
}

export default ToDo