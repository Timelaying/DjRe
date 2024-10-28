import { useState, useEffect } from "react";
import api from "../api";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNotes();
  }, [])

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => { setNotes(data); console.log(data) } )
      .catch((err) => alert(err));
  };

  //Deleting Notes
  const deleteNote = (id) => {
    api.delete(`/api/notes/delete/${id}/`).then((res) => {
      if (res.status === 204) alert("Note Deleted!")
      else alert ("Failed to delete note.")
    }).catch((error) => alert(error))
    getNotes()
  };

  //creating note
  const createNote = (e) => {
    e.preventDefault();
    api
    .post("/api/notes/", {content, title})
    .then((res) => {
      if (res.status === 201) alert("Note Created");
      else alert("Failed to make note");
    })
    .catch((err) => alert(err));
    getNotes();
  }

  return <div>Home...</div>;
}

export default Home;
