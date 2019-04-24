const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Hawaii"
  },
  {
    title: "Habbits to work on",
    body: "Stop procrastinating"
  },
  {
    title: "Office modifications",
    body: "Get a standing desk"
  }
];

const filters = {
  searchText: ""
};

const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function(note) {
    const noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector("#notes").appendChild(noteEl);
  });
};

renderNotes(notes, filters);

const createNoteButton = document
  .querySelector("#create-note")
  .addEventListener("click", function(e) {
    e.target.textContent = "Button got clicked";
  });

document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#name-form").addEventListener("submit", function(e) {
  e.preventDefault();
  console.log(e.target.elements.firstName.value);
  e.target.elements.firstName.value = "";
});

document.querySelector("#for-fun").addEventListener("change", function(e) {
  console.log(e.target.checked);
});
