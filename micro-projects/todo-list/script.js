const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const themeToggle = document.getElementById('themeToggle');
const taskForm = document.getElementById('taskForm');

const updateTaskCount = () => {
  taskCount.textContent = `Tasks: ${taskList.children.length}`;
};

const saveTasks = () => {
  const tasks = [];

  const taskItems = taskList.querySelectorAll('li');

  taskItems.forEach((taskItem) => {
    const taskLabel = taskItem.querySelector('span');

    tasks.push({
      text: taskLabel.textContent,
      completed: taskLabel.classList.contains('completed'),
    });
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const createTask = (taskText, isCompleted = false) => {
  const li = document.createElement('li');
  const taskLabel = document.createElement('span');
  const deleteBtn = document.createElement('button');

  taskLabel.textContent = taskText;
  deleteBtn.textContent = 'Delete';

  if (isCompleted) {
    taskLabel.classList.add('completed');
  }

  taskLabel.addEventListener('click', () => {
    taskLabel.classList.toggle('completed');
    saveTasks();
  });

  deleteBtn.addEventListener('click', () => {
    li.remove();
    updateTaskCount();
    saveTasks();
  });

  li.append(taskLabel, deleteBtn);
  taskList.appendChild(li);

  updateTaskCount();
};

const loadTasks = () => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  savedTasks.forEach((task) => {
    createTask(task.text, task.completed);
  });
};

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === '') {
    taskInput.focus();
    return;
  }

  createTask(taskText);
  saveTasks();

  taskInput.value = '';
});

loadTasks();
