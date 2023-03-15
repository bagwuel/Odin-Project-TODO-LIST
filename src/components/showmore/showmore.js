import './showmore.css'

function createShowMoreElement(title, description, dueDate, priority, notes, done) {
  
  function hideMore() {
    document.querySelector('.showmore').remove()
  }

    const div = document.createElement('div');
    div.classList.add('showmore');
    const closeBtn = document.createElement('button')
    closeBtn.textContent = 'X'
    closeBtn.addEventListener('click', hideMore)
    const closebtndiv = document.createElement('div')
    closebtndiv.classList.add('closebtndiv')
    closebtndiv.appendChild(closeBtn)
    const titleParagraph = document.createElement('p');
    const titleHeader = document.createElement('h3');
    titleHeader.textContent = 'title';
    const titleText = document.createTextNode(title);
    titleParagraph.appendChild(titleHeader);
    titleParagraph.appendChild(titleText);
    const descriptionParagraph = document.createElement('p');
    const descriptionHeader = document.createElement('h3');
    descriptionHeader.textContent = 'description';
    const descriptionText = document.createTextNode(description);
    descriptionParagraph.appendChild(descriptionHeader);
    descriptionParagraph.appendChild(descriptionText);
    const dueDateParagraph = document.createElement('p');
    const dueDateHeader = document.createElement('h3');
    dueDateHeader.textContent = 'dueDate';
    const dueDateText = document.createTextNode(dueDate);
    dueDateParagraph.appendChild(dueDateHeader);
    dueDateParagraph.appendChild(dueDateText);
    const priorityParagraph = document.createElement('p');
    const priorityHeader = document.createElement('h3');
    priorityHeader.textContent = 'priority';
    const priorityText = document.createTextNode(priority);
    priorityParagraph.appendChild(priorityHeader);
    priorityParagraph.appendChild(priorityText);
    const notesParagraph = document.createElement('p');
    const notesHeader = document.createElement('h3');
    notesHeader.textContent = 'notes';
    const notesText = document.createTextNode(notes);
    notesParagraph.appendChild(notesHeader);
    notesParagraph.appendChild(notesText);
    const doneParagraph = document.createElement('p');
    const doneHeader = document.createElement('h3');
    doneHeader.textContent = 'done';
    const doneText = document.createTextNode(done);
    doneParagraph.appendChild(doneHeader);
    doneParagraph.appendChild(doneText);
    div.appendChild(closebtndiv);
    div.appendChild(titleParagraph);
    div.appendChild(descriptionParagraph);
    div.appendChild(dueDateParagraph);
    div.appendChild(priorityParagraph);
    div.appendChild(notesParagraph);
    div.appendChild(doneParagraph);
    return div;
  }
  

  export default createShowMoreElement