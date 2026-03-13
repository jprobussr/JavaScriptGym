const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const themeToggle = document.getElementById('themeToggle');

taskForm.addEventListener('click', (e) => {
  e.preventDefault();

  const taskText = taskInput.value;
  console.log(taskText);
});
