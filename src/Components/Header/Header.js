import React from "react";
import styles from "./Header.module.css";
import logo from "../../imgs/logo.svg"
import Search from "../Search/Search"
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className={styles.header}>
      <nav>
          <Link to="/user" className={styles.logo}><img src={logo} alt="logo"/></Link>
          <Search/>
      </nav>
    </header>
  );
};

export default Header;
