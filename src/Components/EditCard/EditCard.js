import React,{useContext, useState} from 'react'
import { NoteContext } from '../../Pages/User'
// import { CardContext } from '../CardList/Card'
import styles from "./EditCard.module.css"

export default function EditCard() {

    // const {setEdit,note,notes,setNotes} = useContext(CardContext)
    const {NoteToEdit,setNoteToEdit,edit,setEdit,notes,setNotes} = useContext(NoteContext)
    // card values state
    const [image,setImage] = useState(NoteToEdit.image)
    const [title,setTitle] = useState(NoteToEdit.title)
    const [description,setDescription] = useState(NoteToEdit.description)
    // const [updatedNote,setNoteToEdit] = useState(NoteToEdit)
    

    // handl input change
    const handlInput = (e)=>{
        const key = e.target.name;
        const value = e.target.value;
        // setTitle(value)
        setNoteToEdit(prev=>{setNoteToEdit({...prev,[key]:value})})
    }

    const handlSave=(e)=>{
        e.preventDefault()
        setEdit(false)
        const id = NoteToEdit.id
        // const description = note.description
        const image = NoteToEdit.image
        const actualNote = {
            id,
            title,
            description,
            image
        }
        const editNote = (id,updatedNote)=>{
            setNotes(notes.map((note)=>note.id==id?updatedNote:note))
        }

        editNote(NoteToEdit.id,actualNote)
    }
  return (
    <div className={styles.edit}>
        <h3>Edit Note</h3>
        <form>
            <img src={image}/>
            <input type="text" placeholder="Title" value={title} name="title" onChange={(e)=>setTitle(e.target.value)} ></input>
            <input type="text" placeholder="Note"  value={description} name="description" onChange={(e)=>setDescription(e.target.value)} ></input>
            <button type='submit' onClick={handlSave}>Save</button>
        </form>
    </div>
  )
}
