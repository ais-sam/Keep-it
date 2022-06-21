import React, { useState,createContext} from "react";
import styles from "./User.module.css"
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import NoteList from "../../Components/NoteList/NoteList";
import Modal from "../../Components/Modal/Modal";

export const NoteContext = createContext('default value')

const User = () => {
    const[notes,setNotes] = useState([])
    const [edit,setEdit] = useState(false)
    const [NoteToEdit,setNoteToEdit] = useState({})
    const [search,setSearch] = useState('')

    const notesHandler = ()=>{
      if (search.length!==0) {
        const filtredNotes = notes.filter((note)=> note.title.includes(search))
        return filtredNotes
      }
      return notes
    }
    // Retreive notes from Local Storage
    // useEffect(()=>{
    //   const savedNotes = JSON.parse(localStorage.getItem('notes-List'))
    //   if (savedNotes) {
    //     setNotes(savedNotes)
    //   }
    // }
    // ,[])

    // // Add notes to Local Storage
    // useEffect(()=>{
    //   if(notes.length!==0){
    //     localStorage.setItem('notes-List',JSON.stringify(notes))
    //   }
    // }
    // ,[notes])
  return (
    <>
      <NoteContext.Provider value={{ notes, setNotes,edit,setEdit,NoteToEdit,setNoteToEdit,setSearch,search}}>
        <Header />
        <div className={styles.container}>
          <Input />
          <NoteList notesList={notesHandler()}/>
        </div>
        {edit&&<Modal/>}
      </NoteContext.Provider>

    </>
  );
};

export default User;
