import React,{useContext} from 'react'
import { NoteContext } from '../../Pages/User'
import styles from './NoteList.module.css'
import Note from './Note'


export default function NoteList() {
    const {notes} = useContext(NoteContext)


  return (
    <div className={styles.noteList}>
      {console.log('==== notes in NoteList ======')}
      {console.log(notes)}
        {notes.length!==0 ? notes.map((note)=>{
            return <Note key={note.id} note ={note} />
        }):null}

    </div>
    
  )
}
