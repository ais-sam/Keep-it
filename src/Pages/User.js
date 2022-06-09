import React, { useState,createContext } from "react";
import styles from "./User.module.css"
import Header from "../Components/Header/Header";
import Input from "../Components/Input/Input";
import CardList from "../Components/CardList/CardList";

export const NoteContext = createContext('default value')

const User = () => {
    const[notes,setNotes] = useState([
      {id:1,
      title:'note ',
      description:"this is a description"},
      {id:2,
        title:'note ',
        description:"this is a description"},
      {id:3,
        title:'note ',
        description:"this is a description"},
      {id:4,
        title:'note ',
        description:"this is a description"},
    ])
  return (
    <>
        <Header />
      <NoteContext.Provider value={{ notes, setNotes}}>
        <div className={styles.container}>
          <Input />
          <CardList/>
        </div>
      </NoteContext.Provider>
    </>
  );
};

export default User;
