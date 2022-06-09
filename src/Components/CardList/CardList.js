import React,{useContext} from 'react'
import { NoteContext } from '../../Pages/User'
import styles from './CardList.module.css'
import Card from './Card'

export default function CardList() {
    const {notes,deleted} = useContext(NoteContext)


  return (
    <div className={styles.cardList}>
        {notes.length!==0 ? notes.map(({title,description,id,image})=>{
            return <Card key={id} title={title} description={description} id={id} image={image}/>
        }):null}

    </div>
    
  )
}
