import styles from "../index.module.css";
import React from "react";

const Header = () => (
  <div>
    <img src={"location.png"} alt={"Location"} />
    <div className={styles.logo}>
      <a href={"/"} className={styles.nameStyle}>
        Henrik + Maria
      </a>
      <p className={styles.dateStyle}>
        26. August - 29. August 2026, Toscana, Italia
      </p>
    </div>
  </div>
);

export default Header;
