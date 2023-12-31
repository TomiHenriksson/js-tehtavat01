// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: false,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: false,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

const ul = document.querySelector('ul');

const todoItems = todoList.map(todo =>`
  <li>
    <input type="checkbox" id="todo-${todo.id}" ${todo.completed ? 'checked' : ''}>
    <label for="todo-${todo.id}">${todo.task}</label>
  </li>
`).join('')


ul.insertAdjacentHTML('afterbegin', todoItems);
