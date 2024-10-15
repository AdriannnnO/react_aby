import { useState } from 'react';
import './styles.css';

const Note = ({ tytul, tekst, onDelete }) => {
  const [showTekst, setShowTekst] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(tytul);
  const [currentTekst, setCurrentTekst] = useState(tekst);

  const handleEdit = () => {
    const newTitle = prompt('Edit title:', currentTitle);
    if (newTitle !== null) setCurrentTitle(newTitle);

    const newTekst = prompt('Edit text:', currentTekst);
    if (newTekst !== null) setCurrentTekst(newTekst);
  };

  const handleDelete = () => {
      onDelete(); 
    
  };

  return (
    <>
      <button className="note-button" onClick={() => setShowTekst(!showTekst)}>
        <h2>{currentTitle}</h2>
      </button>

      {showTekst && (
        <div>
          <p>{currentTekst}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete} >Delete</button>
        </div>
      )}
    </>
  );
};

export default Note;
