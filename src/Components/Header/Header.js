import React from "react";
import styles from "./Header.module.css";
import logo from "../../imgs/logo.svg"
import Search from "../Search/Search"

const Header = () => {

  return (
    <header className={styles.header}>
      <nav>
          <a className={styles.logo}><img src={logo} alt="logo"/></a>
          <Search/>
      </nav>
    </header>
  );
};

export default Header;
