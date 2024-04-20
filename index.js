document.addEventListener("DOMContentLoaded", function() {
    const fetchButton = document.getElementById("fetch-button");
    const todoList = document.getElementById("todo-list");
  
    fetchButton.addEventListener("click", function() {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {
          todoList.innerHTML = ""; // Clear existing todo list
          data.forEach(todo => {
            const listItem = document.createElement("li");
            listItem.textContent = todo.title;
            todoList.appendChild(listItem);
          });
        })
        .catch(error => console.error("Error fetching todos:", error));
    });
  });
  