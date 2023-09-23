import React, { useState } from 'react';

function NoteList({ folder }) {
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      folder.notes.push(newNote);
      setNewNote('');
    }
  };

  return (
    <div>
      <h3>Notes in {folder.name}</h3>
      <div>
        <input
          type="text"
          placeholder="Add Note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <ul>
        {folder.notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
