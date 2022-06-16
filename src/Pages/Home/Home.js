import React from 'react'
import styles from "./Home.module.css"
import homeImg from "../../imgs/home_img.svg"

export default function Home() {
  return (
    <main>
        <div className={styles.container}>
            <div className={styles.home_img}>
                <img src={homeImg} alt="keep it"/>
            </div>
            <div className={styles.home_text}>
                <h2>All your notes in one place</h2>
                <a href='#' className={styles.home_btn}>Start</a>
            </div>
        </div>
    </main>
  )
}
