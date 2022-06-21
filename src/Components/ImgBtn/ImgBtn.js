import React ,{useRef} from 'react'
import styles from "./ImgBtn.module.css"

export default function ImgBtn(props) {

    // Create a reference to the hidden file input element
    const hiddenFileInput = useRef(null)

     // Programatically click the hidden file input element when the Add Button is clicked
    const handleClick = e => {
      e.preventDefault()
      hiddenFileInput.current.click();
    };


  return (
    <>
      <label>
        <button onClick={handleClick} className={ props.edit === "modal" ? styles.img_button_modal : styles.img_button}>
          {props.children}
        </button>
      </label>

      <input
        type="file"
        accept="image/*"
        className={styles.img_input}
        value={props.value}
        onChange={props.changeHandler}
        ref={hiddenFileInput}
      />
    </>
  );
}
