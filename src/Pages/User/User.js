import React, { useState,createContext } from "react";
import styles from "./User.module.css"
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import NoteList from "../../Components/NoteList/NoteList";
import Modal from "../../Components/Modal/Modal";

export const NoteContext = createContext('default value')

const User = () => {
    const[notes,setNotes] = useState([
      // {id:1,
      // title:'note ',
      // description:"this is a description"},
      // {id:2,
      //   title:'note ',
      //   description:"this is a description"},
      // {id:3,
      //   title:'note ',
      //   description:"this is a description"},
      // {id:4,
      //   title:'note ',
      //   description:"this is a description"},
    ])
    const [edit,setEdit] = useState(false)
    const [NoteToEdit,setNoteToEdit] = useState({})
    const [filtredNotes,setFiltredNotes] = useState([])
    // overlay state
    // const [overlay,setOverlay] = useState(false)
  return (
    <>
      <NoteContext.Provider value={{ notes, setNotes,edit,setEdit,NoteToEdit,setNoteToEdit,filtredNotes,setFiltredNotes}}>
        <Header />
        {/* {overlay?<div className={styles.overlay}></div>:null} */}
        <div className={styles.container}>
          <Input />
          <NoteList/>
          {/* <EditCard/> */}
        </div>
        {edit&&<Modal/>}
      </NoteContext.Provider>
    </>
  );
};

export default User;
