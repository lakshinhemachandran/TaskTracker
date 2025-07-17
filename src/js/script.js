const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector(".taskList");
const taskInput = document.querySelector("#taskInput");

function createNewTask() {
  const taskText = taskInput.value

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button class="delete">Delete</button>`;
  taskList.appendChild(li);
  taskInput.value = "";
}

addTaskBtn.addEventListener("click", createNewTask);
