const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const themeToggle = document.getElementById('themeToggle');
const taskForm = document.getElementById('taskForm');
const body = document.body;

const updateTaskCount = () => {
  taskCount.textContent = `Tasks: ${taskList.children.length}`;
};

const createTask = (taskText) => {
  const li = document.createElement('li');
  const taskLabel = document.createElement('span');
  const deleteBtn = document.createElement('button');

  taskLabel.textContent = taskText;
  deleteBtn.textContent = 'Delete';

  li.append(taskLabel, deleteBtn);
  taskList.appendChild(li);

  updateTaskCount();
};

createTask('study javascript');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === '') {
    taskInput.focus();
    return;
  }

  createTask(taskText);

  taskInput.value = '';
  taskInput.focus();
});
