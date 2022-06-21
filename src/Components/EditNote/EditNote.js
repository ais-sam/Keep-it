import React,{useContext, useState} from 'react'
import { NoteContext } from '../../Pages/User/User'
import styles from "./EditNote.module.css"
import { FaEdit,FaTrashAlt,FaTimes} from "react-icons/fa";
import ImgBtn from "../ImgBtn/ImgBtn"

export default function EditNote() {

    const {NoteToEdit,setEdit,notes,setNotes} = useContext(NoteContext)

    const [image,setImage] = useState(NoteToEdit.image)
    const [title,setTitle] = useState(NoteToEdit.title)
    const [text,setText] = useState(NoteToEdit.text)



    const handlSave=(e)=>{
        e.preventDefault()
        setEdit(false)
        const id = NoteToEdit.id
        const actualNote = {
            id,
            title,
            text,
            image
        }
        const editNote = (id,updatedNote)=>{
            setNotes(notes.map((note)=>note.id===id?updatedNote:note))
        }

        editNote(NoteToEdit.id,actualNote)
    }

    // handle delete
    const handlDelete=(e)=>{
        e.preventDefault()
       console.log('image DELETED----------')
       setImage(null)
    }

    // Update the image state
    const imgChangeHandler = (e)=>{
        const newImage = e.target.files[0]
        const imgUrl = URL.createObjectURL(newImage)
        setImage(imgUrl)
    }


  return (
    <div className={styles.edit}>
        <h3>Edit Note</h3>
        <button className={styles.exit_btn} onClick={()=>setEdit(false)}><FaTimes className={styles.exit_icon}/></button>
        {image ?
        <div className={styles.img_container}>
            <img src={image} className={styles.edit_img} alt="new img"/>
            <div className={styles.edit__btns}>
                <ImgBtn  changeHandler={imgChangeHandler}><FaEdit className={styles.edit_icon}/></ImgBtn>
                <button className='delete-btn' onClick={handlDelete}><FaTrashAlt className={styles.delete_icon}/></button>
            </div>
        </div> : 
            <ImgBtn  changeHandler={imgChangeHandler} edit='modal'>Add image</ImgBtn>
          }
            
        <form>
            <input type="text" placeholder="Title" value={title} name="title" onChange={(e)=>setTitle(e.target.value)} ></input>
            <input type="text" placeholder="Note"  value={text} name="text" onChange={(e)=>setText(e.target.value)} ></input>
            <button type='submit' onClick={handlSave} className={styles.save_btn}>Save</button>
        </form>
    </div>
  )
}

