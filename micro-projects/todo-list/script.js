const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const themeToggle = document.getElementById('themeToggle');

const updateTaskCount = () => {
  taskCount.textContent = `To Do: ${taskList.children.length}`;
};

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === '') {
    return;
  }

  const li = document.createElement('li');
  const taskLabel = document.createElement('span');
  const deleteBtn = document.createElement('button');

  taskLabel.textContent = taskText;
  deleteBtn.textContent = '✖️';

  li.append(taskLabel, deleteBtn);
  taskList.appendChild(li);

  updateTaskCount();

  taskLabel.addEventListener('click', () => {
    taskLabel.classList.toggle('completed');
  });

  deleteBtn.addEventListener('click', () => {
    li.remove();
    updateTaskCount();
  });

  taskInput.value = '';
  taskInput.focus();
});
