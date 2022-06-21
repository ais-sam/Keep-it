import React,{useContext} from 'react'
import { NoteContext } from '../../Pages/User/User'
import styles from "./Search.module.css"


export default function Search() {
    const {search,setSearch} = useContext(NoteContext)
    const searchChangeHandler = (e)=>{
        const searchValue = e.target.value
        setSearch(searchValue) 
    }
  return (
    <input type="search" name="search" className={styles.search} placeholder="Search" value={search} onChange={searchChangeHandler}></input>
  )
}
