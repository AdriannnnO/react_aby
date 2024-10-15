import './App.css';
import Note from './components/Note/note.js';
import NoteList from './components/Note/notelist.js';

function App() {
  return (
    <>
      <NoteList>
        <Note tytul='jd' tekst="siema" />
        <Note tytul='zxc' tekst="siemson" />

        <Note tytul='okej' tekst="ta" />
      </NoteList>
    </>
  );
}

export default App;
