function createNote() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  axios
    .post("/api/notes", { title, content })
    .then((response) => {
      fetchNotes();
    })
    .catch((error) => {
      console.error(error);
    });
}

function fetchNotes() {
  axios
    .get("/api/notes")
    .then((response) => {
      const notes = response.data;
      displayNotes(notes);
    })
    .catch((error) => {
      console.error(error);
    });
}

function displayNotes(notes) {
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = "";

  notes.forEach((note) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${note.title}: ${note.content}`;
    notesList.appendChild(listItem);
  });
}

document
  .getElementById("createNoteButton")
  .addEventListener("click", createNote);

fetchNotes();
