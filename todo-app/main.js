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

const renderedTodos = function(todos, filters) {
  const filteredNotes = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  console.log(renderedTodos(todos, filters));
};

console.log(filters);

const incompleteTodos = todos.filter(function(todo) {
  return !todo.completed;
});
const summary = document.createElement("h3");
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector("body").appendChild(summary);

todos.forEach(function(todo) {
  const p = document.createElement("p");
  p.textContent = todo.text;
  document.querySelector("body").appendChild(p);
});

document.querySelector("#add-todo").addEventListener("click", function(e) {
  console.log("Add a new todo");
});

document.querySelector("#new-todo").addEventListener("input", function(e) {
  console.log(e.target.value);
});
