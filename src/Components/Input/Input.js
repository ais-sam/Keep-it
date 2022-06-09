import React ,{useContext, useState} from 'react'
import Button from './Button'
import styles from "./Input.module.css"
import {NoteContext} from '../../Pages/User'
import {nanoid} from "nanoid"


export default function Input() {

    // UPDATE NEW NOTE LOCALLY

    // local state
    const [newNote,setNewNote] = useState({title:'',description:'',image:''})
    const [image,setImage] = useState('')

    
    // update the state when changing the value on the inputs fields
    const handlInput=(e)=>{
        const key = e.target.id;
        const value = e.target.value;
        // const file = e.target.file
        setNewNote((prev)=>({...prev,[key]:value}))}
        //////

        // setNewNote((prev)=>{

        //     if (key==="image") {
        //         const newImage = e.target.files[0]
        //         const imgUrl = URL.createObjectURL(newImage)
        //         setNewNote({...prev,[key]:imgUrl})
        //     }else{
        //         setNewNote({...prev,[key]:value})
        //     }
            
        // })}

        //////
    

    // Update the image state
    const imgChangeHandler = (e)=>{
        console.log('changed')
        const newImage = e.target.files[0]
        const imgUrl = URL.createObjectURL(newImage)
        setImage(imgUrl)
    }

    //======================================
    
    // UPDATE THE LIST OF NOTES
    const {notes,setNotes} =useContext(NoteContext)
    // Add new note 
    const addNewNote = (e)=>{
        e.preventDefault();
        newNote.id=nanoid()
        newNote.image = image
        setNotes((prev)=>(setNotes([...prev,newNote])))
        setNewNote({title:'',description:''})
        // console.log(newNote.file)
        
    }

  return (
      <>
        
    <form onSubmit={addNewNote}>
        <input placeholder='Enter title' type="text" value={newNote.title} id="title" onChange={handlInput}></input>
        <textarea placeholder='Enter details' rows={3} cols={30} value={newNote.description} id="description" onChange={handlInput}></textarea>
        <img src={image}/>
        <div className={styles.buttons}>
                <Button type='submit'/>
                <input type="file" accept="image/*" id="image" onChange={imgChangeHandler}/>
        </div>
    </form>
      </>
  )
}
