import React, { useState } from 'react';
import './styles.css';

const NoteList = ({ children }) => {
  const [notes, setNotes] = useState(React.Children.toArray(children));

  const handleDeleteNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  return (
    <div className="notezlist">
      {notes.map((note, index) => (
        <div key={index}>
          {React.cloneElement(note, {
            onDelete: () => handleDeleteNote(index),
          })}
        </div>
      ))}
    </div>
  );
};

export default NoteList;
