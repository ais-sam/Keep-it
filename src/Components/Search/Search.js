import React,{useState,useContext} from 'react'
import { NoteContext } from '../../Pages/User/User'

import styles from "./Search.module.css"




export default function Search() {
    const {notes,setNotes,setFiltredNotes} = useContext(NoteContext)
    const [search, setSearch] = useState('')

    const searchChangeHandler = (e)=>{
        const searchValue = e.target.value
        setSearch(e.target.value)
        const filtredNotes = notes?notes.filter((note)=>{
            return note.title.includes(searchValue)
        }):'';
        setFiltredNotes(filtredNotes)
        
    }
  return (
    <input type="search" name="search" className={styles.search} placeholder="Search" value={search} onChange={searchChangeHandler}></input>
  )
}
