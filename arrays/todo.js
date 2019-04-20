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

const sortTodos = function(todoList) {
  todoList.sort(function(a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};
console.log(sortTodos(todos));
console.log(todos);
// const deleteTodo = function(todos, textValue) {
//   const itemIndex = todos.findIndex(function(item) {
//     return item.text.toLowerCase() === textValue.toLowerCase();
//   });

//   if (itemIndex > -1) {
//     todos.splice(itemIndex, 1);
//   }
// };

// deleteTodo(todos, "learn jS");
// console.log(todos);

// const filterTodos = function(todos, todoText) {
//   return todos.filter(function(todoItem, index) {
//     const filtertext = todoItem.text
//       .toLowerCase()
//       .includes(todoText.toLowerCase());
//     return filtertext || !todoItem.completed;
//   });
// };

// console.log(filterTodos(todos, "learn react"));
// console.log(todos);
