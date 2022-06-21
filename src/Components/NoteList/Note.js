import React ,{useContext} from 'react'
import styles from "./NoteList.module.css"
import { NoteContext } from '../../Pages/User/User'
import { FaEdit,FaTrashAlt } from "react-icons/fa";



export default function Note({note}) {
    const {notes,setNotes,setEdit,setNoteToEdit} = useContext(NoteContext)

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
    
    <div className={styles.note}>
        <div className={styles.note__content}>
            <div className={styles.note__img}>
                <img  src={note.image} alt={note.image && `note`}/>
            </div>
            <h2 className={styles.note__title}>{note.title}</h2>
            <p className={styles.note__description}>{note.text}</p>
        </div>
        <div className={styles.note__footer}>
            <button type='button' className={styles.edit_btn} onClick={handlEdit} ><FaEdit className={styles.edit_icon}/></button>
            <button className='delete-btn' onClick={()=>handlDelete(note.id)}><FaTrashAlt className={styles.delete_icon}/></button>
        </div>
        
    </div>
    </>
  )
}
