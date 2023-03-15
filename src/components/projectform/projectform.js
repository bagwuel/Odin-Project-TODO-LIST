
function createProjectForm() {
    const form = document.createElement("form");
    form.setAttribute("id", "project");
    form.classList.add('section')
  
    const formDiv = document.createElement('div')
    formDiv.classList.add('closebtndiv')
    form.appendChild(formDiv);

    const closeButton = document.createElement("button");
    closeButton.setAttribute("type", "button");
    closeButton.classList.add("closeproform");
    closeButton.textContent = "X";
    closeButton.addEventListener("click", () => form.classList.add("hide"));
    formDiv.appendChild(closeButton);
  
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Project Name:";
    form.appendChild(nameLabel);
  
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("name", "name");
    nameInput.setAttribute("required", "");
    nameLabel.appendChild(nameInput);
  
    const submitInput = document.createElement("input");
    submitInput.setAttribute("type", "submit");
    submitInput.setAttribute("value", "Submit");
    submitInput.setAttribute("name", "Submit");
    form.appendChild(submitInput);

    const editBtn = document.createElement('button')
    editBtn.setAttribute("type", "button");
    editBtn.setAttribute("name", "editprojectname");
    editBtn.classList.add('editbtn', 'hide')
    editBtn.textContent = 'Rename'
    form.appendChild(editBtn);

    return form;
  }
  

  export default createProjectForm