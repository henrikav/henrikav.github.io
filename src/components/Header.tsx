import styles from "../index.module.css";
import Logo from "./Logo";

const Header = () => (
  <div>
    <div className={styles.logo}>
      <a href={"/"} className={styles.nameStyle}>
        <Logo className={styles.logoSvg} />
      </a>
    </div>
  </div>
);

export default Header;
