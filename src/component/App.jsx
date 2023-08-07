import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

function createNotes(noteItem){
  return <Note 
    key={noteItem.key}
    title={noteItem.title}
    content={noteItem.content}
  />
}

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note){
    setNotes(prevNotes => {
      return [...prevNotes, note]
    })
  }

  return (
    <div>
      <Header /> 
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => {
        return <Note
          title={noteItem.title}
          content={noteItem.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
