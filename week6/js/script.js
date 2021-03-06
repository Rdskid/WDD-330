let todoItems = [];

//Add
function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}

//Filter
function clearTodos() {
  for (let todo of todoItems) {
    const item = document.querySelector(`[data-key='${todo.id}']`);
    item.style.display = "none";
  }
}

function renderCompleted() {
  for (let todo of todoItems) {
    if (todo.checked) {
      renderTodo(todo);
    }
  }
}

function renderUnCompleted() {
  for (let todo of todoItems) {
    if (!todo.checked) {
      renderTodo(todo);
    }
  }
}

function renderAll() {
  for (let todo of todoItems) {
    renderTodo(todo);
  }
}

//Render all
function renderTodo(todo) {
  const list = document.querySelector(".js-todo-list");
  const item = document.querySelector(`[data-key='${todo.id}']`);

  if (todo.deleted) {
    item.remove();
    return;
  }

  const isChecked = todo.checked ? "done" : "";
  const node = document.createElement("li");
  node.setAttribute("class", `todo-item ${isChecked}`);
  node.setAttribute("data-key", todo.id);
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `;

  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }
}

function toggleDone(key) {
  const index = todoItems.findIndex((item) => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);
}

function deleteTodo(key) {
  const index = todoItems.findIndex((item) => item.id === Number(key));
  const todo = {
    deleted: true,
    ...todoItems[index],
  };
  todoItems = todoItems.filter((item) => item.id !== Number(key));
  renderTodo(todo);
}

const form = document.querySelector(".js-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector(".js-todo-input");

  const text = input.value.trim();
  if (text !== "") {
    addTodo(text);
    input.value = "";
    input.focus();
  }
});

const list = document.querySelector(".js-todo-list");
list.addEventListener("click", (event) => {
  if (event.target.classList.contains("js-tick")) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }

  if (event.target.classList.contains("js-delete-todo")) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});

const filter = document.querySelector(".filter-todos");
filter.addEventListener("change", (event) => {
  console.log(event.target.value);
  clearTodos();
  if (event.target.value === "all") {
    renderAll();
  }
  if (event.target.value === "completed") {
    renderCompleted();
  }
  if (event.target.value === "uncompleted") {
    renderUnCompleted();
  }
});
