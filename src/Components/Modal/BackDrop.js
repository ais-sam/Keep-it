import React,{useContext} from 'react'
import { NoteContext } from '../../Pages/User/User'
import styles from "./Modal.module.css"

export default function BackDrop() {
    const {setEdit} = useContext(NoteContext)

  return (
    <div className={styles.modal_container} onClick={()=>setEdit(false)}>
    </div>
  )
}
