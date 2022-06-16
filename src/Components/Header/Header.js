import React from "react";
import styles from "./Header.module.css";
import logo from "../../imgs/logo.svg"

const Header = () => {

  return (
    <header className={styles.header}>
      <nav>
          <a className={styles.logo}><img src={logo} alt="logo"/></a>
      </nav>
    </header>
  );
};

export default Header;
