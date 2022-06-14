import React ,{useContext, useState,createContext} from 'react'
import styles from "./CardList.module.css"
import { NoteContext } from '../../Pages/User'
import {MdDeleteForever} from 'react-icons/md'
import eggs from '../../imgs/eggs.jpeg'
import Button from '../Input/Button'
import EditCard from '../EditCard/EditCard'
import Modal from '../Modal/Modal'

export const CardContext = createContext('')


export default function Card({note}) {
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
    
    <div className={notes.length>1? styles.card : styles.oneCard}>
        <div className={styles.card__content}>
            <div className={styles.card__img}>
                <img  src={note.image}/>
            </div>
            <h2 className={styles.card__title}>{note.title}</h2>
            <p className={styles.card__description}>{note.description}</p>
        </div>
        <div className={styles.card__footer}>
            <button type='button' className={styles.edit_btn} onClick={handlEdit} ><i class="fa-solid fa-pen-to-square"></i></button>
            
            <button className='delete-btn' onClick={()=>handlDelete(note.id)}><MdDeleteForever className='delete-icon'/></button>
        </div>
        
    </div>
    <CardContext.Provider value={{notes,setNotes,edit,setEdit,note}}>
            {/* {edit && <EditCard edit={handlEdit}/> } */}
            {/* {edit && <Modal styles={{position:"absolute"}}/>} */}
        </CardContext.Provider>
    </>
  )
}
