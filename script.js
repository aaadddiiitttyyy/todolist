// Select DOM elements
const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

// Load the ding sound
const dingSound = new Audio("ding.mp3");

// Function to add a new to-do item
addButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim(); // Trim to remove extra spaces
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new to-do item
    const listItem = document.createElement("li");
    listItem.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const task = document.createElement("span");
    task.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    // Append elements to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(task);
    listItem.appendChild(deleteButton);

    // Append the new list item to the to-do list
    todoList.appendChild(listItem);

    // Clear input field
    todoInput.value = "";

    // Event: Mark task as complete
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            // Play the ding sound
            dingSound.play();
            listItem.classList.add("completed");
            todoList.appendChild(listItem); // Move to the bottom
        } else {
            listItem.classList.remove("completed");
        }
    });

    // Event: Delete task
    deleteButton.addEventListener("click", () => {
        listItem.classList.add("fade-out");
        setTimeout(() => listItem.remove(), 500); // Add delay before removal
    });
});
