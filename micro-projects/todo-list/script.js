const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const themeToggle = document.getElementById('themeToggle');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = taskInput.value;

  const li = document.createElement('li');
  const taskLabel = document.createElement('span');
  const deleteBtn = document.createElement('button');

  taskLabel.textContent = taskText;
  deleteBtn.textContent = 'Delete';

  li.append(taskLabel, deleteBtn);
  taskList.appendChild(li);

  taskInput.value = '';

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });
});
