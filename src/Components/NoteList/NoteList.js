import React from 'react'
import styles from './NoteList.module.css'
import Note from './Note'


export default function NoteList({notesList}) {
    const notes = notesList.length!==0?notesList.map((note)=>{
      return <Note key={note.id} note ={note}/>
    }):''


  return (
    <div className={notes.length>2?styles.noteList:styles.flexNotes}>
       {notes}
    </div>
    
  )
}
