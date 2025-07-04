import styles from "../index.module.css";

const Header = () => (
  <div>
    <img className={styles.headerImage} src={"location.png"} alt={"Location"} />
    <div className={styles.logo}>
      <a href={"/"} className={styles.nameStyle}>
        Henrik + Maria
      </a>
      <p className={styles.dateStyle}>
        27. August - 30. August 2026, Toscana, Italia
      </p>
    </div>
  </div>
);

export default Header;
