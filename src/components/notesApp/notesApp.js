import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

import NotesAppForm from "./notesAppForm";

function NotesApp({ notes, removeNote, updateNote }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateNote(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <NotesAppForm edit={edit} onSubmit={submitUpdate} />;
  }

  return notes.map((note, index) => {
    return (
      <div key={index} className="todo-row">
        <div key={note.id}>{note.text}</div>
        <div className="todo-icons">
          <RiCloseCircleLine
            onClick={() => removeNote(note.id)}
            className="todo-delete-icon"
          />

          <TiEdit
            onClick={() => setEdit({ id: note.id, value: note.text })}
            className="todo-edit-icon"
          />
        </div>
      </div>
    );
  });
}

export default NotesApp;
