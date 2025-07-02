import styles from "../index.module.css";
import { NavLink } from "react-router";
import React from "react";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <a href={"/"} className={styles.nameStyle}>
          Henrik + Maria
        </a>
        <p className={styles.dateStyle}>
          {" "}
          26. August - 29. August 2026 - Toscana, Italia
        </p>
      </div>
      <nav>
        <NavLink
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
          to={"/"}
        >
          Hjem
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
          to={"/program"}
        >
          Program
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
          to={"/transport"}
        >
          Transport
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
