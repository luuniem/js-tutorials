const todos = [
  {
    text: "order cat Food",
    completed: true
  },
  {
    text: "clean kitchen",
    completed: false
  },
  {
    text: "buy food",
    completed: false
  },
  {
    text: "learn react",
    completed: true
  },
  {
    text: "learn js",
    completed: true
  }
];

//setup div
//setup filters (searchText) and wire up a new filter input to change it
//create renderTodos function to render and rerender the lastest filtered data
//clear div

const filters = {
  searchText: "",
  hideCompleted: false
};

const renderTodos = function(todos, filters) {
  const filteredTodos = todos.filter(function(todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter(function(todo) {
    return !todo.completed;
  });

  document.querySelector("#todos").innerHTML = "";

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#todos").appendChild(summary);

  filteredTodos.forEach(function(todo) {
    const p = document.createElement("p");
    p.textContent = todo.text;
    document.querySelector("#todos").appendChild(p);
  });
};

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#todo-form").addEventListener("submit", function(e) {
  e.preventDefault();

  todos.push({
    text: e.target.elements.todoText.value,
    completed: false
  });
  renderTodos(todos, filters);
  e.target.elements.todoText.value = "";
});

document
  .querySelector("#hide-completed")
  .addEventListener("change", function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
  });
