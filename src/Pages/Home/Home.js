import React from 'react'
import styles from "./Home.module.css"
import { Link } from "react-router-dom";
import logo from "../../imgs/logo.svg"

export default function Home() {
  return (
    <main>
        <div className={styles.container}>
            <div className={styles.home_img}>
                <img src={logo} alt="keep it"/>
            </div>
            <div className={styles.home_text}>
                <h2>All your notes in one place</h2>
                <Link to="/user" className={styles.home_btn}>Start</Link>
            </div>
        </div>
    </main>
  )
}
