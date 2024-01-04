document.addEventListener("DOMContentLoaded", function() {
  var todoInput = document.getElementById("todoInput");
  var dateInput = document.getElementById("dateInput");
  var addButton = document.getElementById("addButton");
  var todayTasksList = document.getElementById("todayTasks");
  var otherTasksList = document.getElementById("otherTasks");

  addButton.addEventListener("click", function() {
    var todoText = todoInput.value;
    var todoDate = dateInput.value;
    if (todoText !== "") {
      var todoItem = "<li class='list-group-item'><input type='checkbox' class='checkbox'> " + 
        "<span class='task'>" + todoText + "</span> <span class='date'>" + todoDate + "</span>" +
        "<button class='btn btn-danger btn-sm float-right delete-button'>Delete</button></li>";
      if (isToday(todoDate)) {
        todayTasksList.insertAdjacentHTML("beforeend", todoItem);
      } else {
        otherTasksList.insertAdjacentHTML("beforeend", todoItem);
      }
      todoInput.value = "";
      dateInput.value = "";
    }
  });

  todayTasksList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {
      event.target.parentElement.remove();
    }
    if (event.target.classList.contains("checkbox")) {
      event.target.nextElementSibling.classList.toggle("completed");
    }
  });

  otherTasksList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {
      event.target.parentElement.remove();
    }
    if (event.target.classList.contains("checkbox")) {
      event.target.nextElementSibling.classList.toggle("completed");
    }
  });

  function isToday(date) {
    var inputDate = new Date(date);
    var today = new Date();
    return inputDate.toDateString() === today.toDateString();
  }
});

