import React ,{useContext, useState} from 'react'
import styles from "./Input.module.css"
import {NoteContext} from '../../Pages/User/User'
import {nanoid} from "nanoid"
import ImgBtn from '../ImgBtn/ImgBtn'
import { FaImage} from "react-icons/fa";


export default function Input() {

    // UPDATE NEW NOTE LOCALLY

    // local state
    const [newNote,setNewNote] = useState({title:'',text:'',image:''})
    const [image,setImage] = useState('')

    
    // update the state when changing the value on the inputs fields
    const handlInput=(e)=>{
        const key = e.target.id;
        const value = e.target.value;
        setNewNote((prev)=>({...prev,[key]:value}))}
    

    // Update the image state
    const imgChangeHandler = (e)=>{
        const newImage = e.target.files[0]
        const imgUrl = URL.createObjectURL(newImage)
        setImage(imgUrl)
    }

    //======================================
    
    // UPDATE THE LIST OF NOTES
    const {setNotes} =useContext(NoteContext)
    // Add new note 
    const addNewNote = (e)=>{
        e.preventDefault();
        newNote.id=nanoid()
        newNote.image = image
        
        if (newNote.title.length>0 || newNote.text.length>0 || newNote.image.length>0) {
            setNotes((prev)=>(setNotes([...prev,newNote])))
            setNewNote({title:'',text:'',image:''})
            setImage('')
        }
   
    }

    const [expand,setExpand] = useState(false)
  return (
    <>
      <form onSubmit={addNewNote} className={expand ? styles.show : ''}>
        <input
          placeholder={expand ? "Title": "Add Note ..."}
          type="text"
          value={newNote.title}
          id="title"
          onChange={handlInput}
          onClick={()=>setExpand(true)}
        ></input>
        <textarea
          placeholder="َ Add Note ..."
          rows={3}
          cols={30}
          value={newNote.text}
          id="text"
          onChange={handlInput}
        ></textarea>

        <div className={styles.buttons}>
          <ImgBtn value={newNote.image}  changeHandler={imgChangeHandler} ><FaImage className={styles.img_icon} size="xs"/></ImgBtn>
          <button type="submit" className={styles.add_btn}>+</button>
        </div>
      </form>
    </>
  );
}
