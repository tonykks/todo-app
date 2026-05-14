const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const todoSummary = document.getElementById("todo-summary");

const STORAGE_KEY = "todoItemList";
const todoItemList = [];

function saveTodosToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todoItemList));
}

function loadTodosFromStorage() {
  const savedTodos = localStorage.getItem(STORAGE_KEY);

  if (!savedTodos) {
    return;
  }

  const parsedTodos = JSON.parse(savedTodos);
  todoItemList.splice(0, todoItemList.length, ...parsedTodos);
}

function toggleTodo(id) {
  const todo = todoItemList.find((item) => item.id === id);

  if (!todo) {
    return;
  }

  todo.done = !todo.done;
  saveTodosToStorage();
  renderTodos();
}

function deleteTodo(id) {
  const todoIndex = todoItemList.findIndex((item) => item.id === id);

  if (todoIndex === -1) {
    return;
  }

  todoItemList.splice(todoIndex, 1);
  saveTodosToStorage();
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";

  if (todoItemList.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "text-sm text-slate-400";
    emptyItem.textContent = "No todos yet.";
    todoList.appendChild(emptyItem);
    renderSummary();
    return;
  }

  todoItemList.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.className =
      "flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3";

    const todoLabel = document.createElement("label");
    todoLabel.className = "flex min-w-0 flex-1 items-center gap-3";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.className = "h-4 w-4 rounded border-slate-300";
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    const todoText = document.createElement("span");
    todoText.className = todo.done
      ? "truncate text-slate-400 line-through"
      : "truncate text-slate-700";
    todoText.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className =
      "rounded-md px-3 py-1 text-sm font-medium text-red-600 transition hover:bg-red-50";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTodo(todo.id));

    todoLabel.appendChild(checkbox);
    todoLabel.appendChild(todoText);
    todoItem.appendChild(todoLabel);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);
  });

  renderSummary();
}

function renderSummary() {
  const totalCount = todoItemList.length;
  const completedCount = todoItemList.filter((todo) => todo.done).length;
  const remainingCount = totalCount - completedCount;

  todoSummary.textContent = `Total: ${totalCount} | Completed: ${completedCount} | Remaining: ${remainingCount}`;
}

function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText === "") {
    return;
  }

  const todo = {
    id: Date.now(),
    text: todoText,
    done: false,
  };

  todoItemList.push(todo);
  saveTodosToStorage();
  todoInput.value = "";
  todoInput.focus();
  renderTodos();
}

addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

loadTodosFromStorage();
renderTodos();
