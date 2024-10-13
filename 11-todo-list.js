const todoList = JSON.parse(localStorage.getItem('todolist')) || [];

renderTodoList();

function renderTodoList() {
  //const toDoList = JSON.parse(localStorage.getItem('todoList'));
  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    const { name,dueDate,dueTime } = todoObject;
    //const dueDate = todoObject.dueDate;
    const html = `
    <div class="result_cont-display">
      <div class="name">${name}</div>
      <div class="date">${dueDate}</div>
      <div class="time">${dueTime}</div>
      <button class = "delete" 
      onclick="
        deleteTodo(${i});
        renderTodoList();
      ">
      Delete
      </button>
    </div>
  `;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-display').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  //todoList.push(name);

  const dateInputElement = document.querySelector('.js-dueDate-input');
  const dueDate = dateInputElement.value;

  const timeInputElement = document.querySelector('.js-dueTime-input');
  const dueTime= timeInputElement.value;

  //dinagdag ko
  if(name === '') {
    todoList.splice(0, 1);
    document.querySelector('.js-error').innerHTML = 'Please enter a to-do item!';
    return
  } else {
    document.querySelector('.js-error').innerHTML = '';
  }

  if(!dueDate || !dueTime) {
    document.querySelector('.js-error').innerHTML = 'Please input date and time!';
    return
  } /*
   else if(!dueTime) {
    document.querySelector('.js-error').innerHTML = 'Please input time!';
    return
  }
  */
  todoList.push({name, dueDate, dueTime});

  localStorage.setItem('todolist', JSON.stringify(todoList));
  console.log(todoList);

  inputElement.value = '';
  dateInputElement.value = '';
  timeInputElement.value = '';

  renderTodoList();
}

function deleteTodo(index) {
  todoList.splice(index, 1); // Remove the todo from the array
  localStorage.setItem('todolist', JSON.stringify(todoList)); // Update local storage
  renderTodoList();
}

function inputEvent(event) {
  if(event.key === 'Enter') {
    addTodo();
  }
}