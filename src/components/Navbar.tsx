import styles from "../index.module.css";
import { NavLink } from "react-router";
import React from "react";
import NavBarLink from "./NavBarLink";
import Header from "./Header";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Header />
      <nav>
        <NavBarLink title={"hjem"} defaultPage={true} />
        <NavBarLink title={"program"} />
        <NavBarLink title={"transport"} />
        <NavBarLink title={"priser"} />
        <NavBarLink title={"RSVP"} />
      </nav>
    </div>
  );
};

export default Navbar;
