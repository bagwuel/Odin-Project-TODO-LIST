

function createTodoForm() {
    const form = document.createElement("form");
    form.setAttribute("id", "todo");
  
    const closeFormDiv = document.createElement('div')
    closeFormDiv.classList.add('closetodoformdiv')
    form.appendChild(closeFormDiv);

    const closeButton = document.createElement("button");
    closeButton.setAttribute("type", "button");
    closeButton.classList.add("closetodoform");
    closeButton.innerText = "X";
    closeButton.addEventListener("click", () => form.classList.add("hide"));
    closeFormDiv.appendChild(closeButton);
    form.appendChild(document.createElement("br"));
  
    const titleLabel = document.createElement("label");
    titleLabel.classList.add('title')
    titleLabel.setAttribute("for", "title");
    titleLabel.innerText = "Title:";
    form.appendChild(titleLabel);
  
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("required", "");
    titleInput.maxLength = 20;
    titleLabel.appendChild(titleInput);
    form.appendChild(document.createElement("br"));
  
    const descriptionLabel = document.createElement("label");
    descriptionLabel.classList.add('description')
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.innerText = "Description:";
    form.appendChild(descriptionLabel);
  
    const descriptionTextarea = document.createElement("textarea");
    descriptionTextarea.setAttribute("id", "description");
    descriptionTextarea.setAttribute("name", "description");
    descriptionLabel.appendChild(descriptionTextarea);
    form.appendChild(document.createElement("br"));
  
    const dueDateLabel = document.createElement("label");
    dueDateLabel.classList.add('dueDate')
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateLabel.innerText = "Due Date:";
    form.appendChild(dueDateLabel);
  
    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("id", "dueDate");
    dueDateInput.setAttribute("name", "dueDate");
    dueDateInput.setAttribute("required", "");
    dueDateLabel.appendChild(dueDateInput);
    form.appendChild(document.createElement("br"));
  
    const priorityLabel = document.createElement("label");
    priorityLabel.classList.add('priority')
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.innerText = "Priority:";
    form.appendChild(priorityLabel);
  
    const prioritySelect = document.createElement("select");
    prioritySelect.setAttribute("id", "priority");
    prioritySelect.setAttribute("name", "priority");
    priorityLabel.appendChild(prioritySelect);
  
    const highOption = document.createElement("option");
    highOption.setAttribute("value", "high");
    highOption.innerText = "High";
    prioritySelect.appendChild(highOption);
  
    const mediumOption = document.createElement("option");
    mediumOption.setAttribute("value", "medium");
    mediumOption.innerText = "Medium";
    prioritySelect.appendChild(mediumOption);
  
    const lowOption = document.createElement("option");
    lowOption.setAttribute("value", "low");
    lowOption.innerText = "Low";
    prioritySelect.appendChild(lowOption);
  
    form.appendChild(document.createElement("br"));
  
    const notesLabel = document.createElement("label");
    notesLabel.setAttribute("for", "notes");
    notesLabel.classList.add('notes')
    notesLabel.innerText = "Notes:";
    form.appendChild(notesLabel);
  
    const notesTextarea = document.createElement("textarea");
    notesTextarea.setAttribute("id", "notes");
    notesTextarea.setAttribute("name", "notes");
    notesLabel.appendChild(notesTextarea);
    form.appendChild(document.createElement("br"));
  
    const submitInput = document.createElement("input");
    submitInput.setAttribute("type", "submit");
    submitInput.setAttribute("value", "Submit");
    submitInput.setAttribute("id", "submit");
    form.appendChild(submitInput);
  
    return form;
  }

  export default createTodoForm
