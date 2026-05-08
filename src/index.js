import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

//CHALLENGE:
//1. Implement the add note functionality.

//- Create a constant that keeps track of the title and content.
// const [note, setNote] = React.useState({
//     title="",
//     content=""
//   });
// value={note.title}
// value={note.content}
// onChange = { handleChange };
// onChange = { handleChange };
// function handleChange(event){
//     const {name,value}=event.target;
//     setNote(prevNote => {
//       return {
//         ...prevNote,
//         [name]: value
//       }
//     })
//       }

//- Pass the new note back to the App.

// props
//  <button onClick={submitNote}>Add</button>
// props.onAdd(note)
// function submitNote(event){
//     event.preventDefault();//for without refresh
//    }
//  <CreateArea onAdd={addNote} />
// function addNote(note) {}

//- Add new note to an array.

// const [notes, setNotes] = React.useState([]);
//   function addNote(note) {
//     setNotes((prevNotes) => {
//       return [...prevNotes, note];
//     });
//   }

//- Take array and render seperate Note components for each item.

// {notes.map((noteItem) => {
//     return <Note title={noteItem.title} content={noteItem.content} />;
//   })}

//2. Implement the delete note functionality.

//- Callback from the Note component to trigger a delete function.

//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/
