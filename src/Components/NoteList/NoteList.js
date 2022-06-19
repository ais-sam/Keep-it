import React,{useContext} from 'react'
import { NoteContext } from '../../Pages/User/User'
import styles from './NoteList.module.css'
import Note from './Note'


export default function NoteList({notesList}) {
    // const {notes,filtredNotes} = useContext(NoteContext)
    const notes = notesList.length!=0?notesList.map((note)=>{
      return <Note key={note.id} note ={note}/>
    }):''


  return (
    <div className={notes.length>2?styles.noteList:styles.flexNotes}>
        {/* {notes.length!==0 ? filtredNotes.map((note)=>{
            return <Note key={note.id} note ={note} />
        }):null} */}
        {/* {notes.map((note)=>{
            return <Note key={note.id} note ={note} />
        })} */}
        {/* {
          filtredNotes.length!=0 ?
          filtredNotes.map((note)=>{
            return <Note key={note.id} note ={note}/>})
        : notes.map((note)=>{
          return <Note key={note.id} note ={note} />
      })
        } */}

       {notes}

    </div>
    
  )
}
