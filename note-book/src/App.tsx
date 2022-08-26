import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import { HeaderComponent } from "./components/header";
import { NoteList, NOTELIST_ITEM } from "./components/list";
import { useNoteLists } from "./services/effect/list";

let i = 100;
function App() {
  const lists = useNoteLists() as NOTELIST_ITEM[];

  const [notes, setNoties] = useState<NOTELIST_ITEM[]>(lists);
  useEffect(() => {
    setNoties(lists);
  }, [lists]);

  const [newNoteText, setNewText] = useState<string>("");

  useEffect(() => {
    setNoties(
      notes.concat({
        id: i++,
        done: false,
        text: newNoteText,
      })
    );
  }, [newNoteText]);

  const handleClick = (item: NOTELIST_ITEM) => {
    const newNotes = notes.map((t) => {
      t.done = t.id === item.id ? !item.done : item.done;
      return t;
    });
    setNoties(newNotes);
  };

  const handleDelete = (item: NOTELIST_ITEM) => {
    const newNotes = notes.filter((t) => t.id !== item.id);
    setNoties(newNotes);
  };
  return (
    <div className="App">
      <HeaderComponent title="标题" setInputText={setNewText} />
      <NoteList list={notes} onClick={handleClick} onDelete={handleDelete} />
    </div>
  );
}

export default App;
