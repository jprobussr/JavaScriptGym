// Select Items
const taskTitleInput = document.getElementById('task-title');
const taskDescInput = document.getElementById('task-desc');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');


// Function to add new task
const addTask = () => {
    const title = taskTitleInput.value.trim();
    const description = taskDescInput.value.trim();

    if (title === '') {
        alert('Please enter a task title.');
        return;
    }

    // Create new list item
    const listItem = document.createElement('li');

    // Create task details div
    const taskDetails = document.createElement('div');
    taskDetails.textContent = `${title} - ${description}`;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => listItem.remove());

    // Append list item to task list
    listItem.appendChild(taskDetails);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    // Clear input fields
    taskTitleInput.value = '';
    taskDescInput.value = '';
}

// Event Listner for add task button
addTaskButton.addEventListener('click', addTask);

// Optional: Add task on pressing enter key
taskTitleInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

taskDescInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});