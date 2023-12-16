let container = document.querySelector(".container");
let addTaskButton = document.querySelector(".add-task-button");
let searchBar = document.querySelector(".add-task-search-bar");
let checkMark = document.querySelector(".check-mark-task-done");
let deleteMark = document.querySelector(".trash-can-task-cancel");
// console.log(container, addTaskButton);
addTaskButton.addEventListener("click", function () {
  if (searchBar.value == "") {
    alert("please enter a valid value");
  } else {
    let newTask = document.createElement("div");
    newTask.classList.add("task");
    let li = document.createElement("li");
    li.textContent = searchBar.value;
    newTask.appendChild(li);
    console.log(li);
    li.style.listStyle = "none";

    let checkMarkButton = document.createElement("button");
    checkMarkButton.classList.add("check-mark-task-done");
    checkMarkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkMarkButton.addEventListener("click", function () {
      li.style.textDecoration = "line-through";
    });
    let deleteMarkButton = document.createElement("button");
    deleteMarkButton.classList.add("trash-can-task-cancel");
    deleteMarkButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteMarkButton.addEventListener("click", function () {
      li.style.display = "none";
      deleteMarkButton.style.display = "none";
      checkMarkButton.style.display = "none";
    });

    newTask.appendChild(checkMarkButton);
    newTask.appendChild(deleteMarkButton);
    container.appendChild(newTask);
  }
  searchBar.value = "";
});
