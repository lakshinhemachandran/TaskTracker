const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector(".taskList");
const taskInput = document.querySelector("#taskInput");

function createNewTask() {
  const taskText = taskInput.value

  const li = document.createElement("li");
  li.innerHTML = `<span class="task-test">${taskText} </span><button class="delete">Delete</button>`;
  taskList.appendChild(li);
  taskInput.value = "";
  saveToLocalStorage();
}

addTaskBtn.addEventListener("click", createNewTask);

function deleteTask(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
  saveToLocalStorage();
}

taskList.addEventListener("click", deleteTask);


function getAllTasks() {
  const allTasks = document.querySelectorAll(".task-test");
  const tasksTextArray = [...allTasks].map(task => task.textContent.trim());
  return tasksTextArray;
}

function saveToLocalStorage() {
  const tasksArray = getAllTasks();
  const tasksString = JSON.stringify(tasksArray);
  localStorage.setItem("tasks", tasksString);
}
window.onload = function() {
  loadTasksFromStorage();
};

function loadTasksFromStorage() {
  const savedTasksString = localStorage.getItem("tasks");
  const savedTasksArray = savedTasksString ? JSON.parse(savedTasksString) : [];

  savedTasksArray.forEach(taskText => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="task-test">${taskText}</span><button class="delete">Delete</button>`;
    taskList.appendChild(li);
  });
}
