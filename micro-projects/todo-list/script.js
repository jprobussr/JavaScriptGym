const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const themeToggle = document.getElementById('themeToggle');
const taskForm = document.getElementById('taskForm');
const body = document.body;

const updateTaskCount = () => {
  taskCount.textContent = `Tasks Todo: ${taskList.children.length}`;
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
  taskInput.focus();
});

loadTasks();

const updateTheme = () => {
  const isLight = body.classList.contains('light');

  if (isLight) {
    themeToggle.textContent = '🌙';
    themeToggle.setAttribute('aria-pressed', 'true');
  } else {
    themeToggle.textContent = '☀️';
    themeToggle.setAttribute('aria-pressed', 'false');
  }
};

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  body.classList.add('light');
} else {
  body.classList.remove('light');
}

updateTheme();

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');

  const isLight = body.classList.contains('light');

  if (isLight) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }

  updateTheme();
});