import React from "react";
import styles from "./Header.module.css";

const Header = () => {

  return (
    <header className={styles.header}>
      <div>Logo</div>
      <div>Avatar</div>
    </header>
  );
};

export default Header;
