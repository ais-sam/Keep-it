import React ,{useContext, useState,createContext} from 'react'
import styles from "./NoteList.module.css"
import { NoteContext } from '../../Pages/User'
import {MdDeleteForever} from 'react-icons/md'
import { FaEdit,FaTrashAlt } from "react-icons/fa";
// import eggs from '../../imgs/eggs.jpeg'
// import Button from '../Input/Button'
// import Editnote from '../Editnote/Editnote'
// import Modal from '../Modal/Modal'

export const noteContext = createContext('')


export default function Note({note}) {
    const {notes,setNotes,edit,setEdit,NoteToEdit,setNoteToEdit} = useContext(NoteContext)
    // const [edit,setEdit] = useState(false)
    // const [title,setTitle] = useState(title)
    // const [desc,setDesc] = useState(description)

    // Delete notes
    const handlDelete=(deletedId)=>{
        const newNotes = notes.filter((note)=>{
            return note.id!== deletedId
        })
        setNotes(newNotes)
    }

    // handlEdit
    const handlEdit=()=>{
        setEdit(true);
        setNoteToEdit(note)
    }
  return (
    <>
    
    <div className={notes.length>1? styles.note : styles.onenote}>
        <div className={styles.note__content}>
            <div className={styles.note__img}>
                <img  src={note.image}/>
            </div>
            <h2 className={styles.note__title}>{note.title}</h2>
            <p className={styles.note__description}>{note.description}</p>
        </div>
        <div className={styles.note__footer}>
            <button type='button' className={styles.edit_btn} onClick={handlEdit} ><FaEdit className={styles.edit_icon}/></button>
            <button className='delete-btn' onClick={()=>handlDelete(note.id)}><FaTrashAlt className={styles.delete_icon}/></button>
        </div>
        
    </div>
    <noteContext.Provider value={{notes,setNotes,edit,setEdit,note}}>
            {/* {edit && <Editnote edit={handlEdit}/> } */}
            {/* {edit && <Modal styles={{position:"absolute"}}/>} */}
        </noteContext.Provider>
    </>
  )
}
