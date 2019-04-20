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

console.log("A" < "a");

const sortNotes = function(notes) {
  notes.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortNotes(notes);
// console.log(notes);
// const findNotes = function(notes, query) {
//   return notes.filter(function(note, index) {
//     const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
//     const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
//     return isTitleMatch || isBodyMatch;
//   });
// };

// console.log(findNotes(notes, "standing"));
