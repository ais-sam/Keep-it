import React,{useContext} from 'react'
import { NoteContext } from '../../Pages/User/User'
import styles from './CardList.module.css'
import Card from './Note'


export default function CardList() {
    const {notes} = useContext(NoteContext)


  return (
    <div className={styles.cardList}>
      {console.log('==== notes in cardList ======')}
      {console.log(notes)}
        {notes.length!==0 ? notes.map((note)=>{
            return <Card key={note.id} note ={note} />
        }):null}

    </div>
    
  )
}
