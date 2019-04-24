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
  searchText: ""
};

const renderTodos = function(todos, filters) {
  const filteredTodos = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
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

document.querySelector("#add-todo").addEventListener("click", function(e) {
  console.log("Add a new todo");
});

document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});
