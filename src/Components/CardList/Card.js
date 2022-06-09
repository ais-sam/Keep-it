import React ,{useContext} from 'react'
import styles from "./CardList.module.css"
import { NoteContext } from '../../Pages/User'
import {MdDeleteForever} from 'react-icons/md'
import eggs from '../../imgs/eggs.jpeg'

export default function Card({title,description,id,image}) {
    const {notes,setNotes} = useContext(NoteContext)


    // Delete notes
    const handlDelete=(deletedId)=>{
        const newNotes = notes.filter((note)=>{
            return note.id!== deletedId
        })

        setNotes(newNotes)
    }

  return (
    <div className={styles.card}>
        <div className={styles.card__content}>
            <div className={styles.card__img}>
                <img  src={image}/>
            </div>
            <h2 className={styles.card__title}>{title}</h2>
            <p className={styles.card__description}>{description}</p>
        </div>
        <div className={styles.card__footer}>
            <button className='delete-btn' onClick={()=>handlDelete(id)}><MdDeleteForever className='delete-icon'/></button>
        </div>
    </div>
  )
}
