const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

let tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({text: taskText}); // create new task object
        taskInput.value = ""; // reset alue of taskInput to empty string
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = ""; // clear the existing content within the taskList element by setting its innerHTML to an empty string.
    // iterates through the tasks array using forEach, creating a list item <li> for each task.
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        // checkbox, a label displaying the task text, and corresponding IDs
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
        // sets up an event listener for each checkbox within the task list <li> element
        // When the checkbox state changes, it triggers the toggleTask() function
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li)
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed); // filters tasks array to retrieve only the tasks that are not marked as completed (task.completed is false)
    displayTasks();
}

function clearAllTasks() {
    tasks = [];
    displayTasks();
}

// Perform addEventListener for addTask and clearCompletedTasks buttons to listen for 
// clicks after clicking the Add Task and Clear Completed buttons.
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

// Clear the tasks list
clearAllBtn.addEventListener("click", clearAllTasks);