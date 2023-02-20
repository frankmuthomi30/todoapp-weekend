const taskForm = document.querySelector('#task-form');
const taskList = document.querySelector('#tasklist');

taskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent default form submission

  // get the value of the input field
  const taskText = document.querySelector('#taskinput').value;

  // create a new task element
  const task = document.createElement('div');
  task.classList.add('task');
  task.innerHTML = `
    <input type="checkbox" class="task-check">
    <span class="task-text" contenteditable ="true">${taskText}</span>
    <button class="task-delete">Delete</button>
  `;

  // add the new task to the task list
  taskList.appendChild(task);

  // deleting a task
  taskList.addEventListener('click', function(event) {
    // check if the clicked element is a task-delete button
    if (event.target.classList.contains('task-delete')) {
      // remove the parent task element
      event.target.parentElement.remove();
    }
  });

  // clear the input field
  document.querySelector('#taskinput').value = '';

  
  
  
  
});
