import React,{useContext} from 'react'
import { NoteContext } from '../../Pages/User/User'
import styles from './NoteList.module.css'
import Note from './Note'


export default function NoteList() {
    const {notes,filtredNotes} = useContext(NoteContext)


  return (
    <div className={notes.length>2?styles.noteList:styles.flexNotes}>
        {notes.length!==0 ? filtredNotes.map((note)=>{
            return <Note key={note.id} note ={note} />
        }):null}

    </div>
    
  )
}
