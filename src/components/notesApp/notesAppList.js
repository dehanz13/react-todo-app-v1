import React, { useState } from "react";

import NotesAppForm from "./notesAppForm";
import NotesApp from "./notesApp";

function NotesAppList() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    if (!note.text || /^\s*$/.test(note.text)) {
      return;
    }
    const newNotes = [note, ...notes];
    setNotes(newNotes);
  };

  const updateNote = (noteId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setNotes((prev) =>
      prev.map((item) => (item.id === noteId ? newValue : item))
    );
  };

  const removeNote = (id) => {
    const removeArr = [...notes].filter((note) => note.id !== id);
    setNotes(removeArr);
  };

  return (
    <>
      <h1>Notes App</h1>
      <NotesAppForm onSubmit={addNote} />
      <NotesApp notes={notes} removeNote={removeNote} updateNote={updateNote} />
    </>
  );
}

export default NotesAppList;
