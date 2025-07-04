import styles from "../index.module.css";
import NavBarLink from "./NavBarLink";
import Header from "./Header";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Header />
      <nav>
        <NavBarLink title={"hjem"} defaultPage={true} />
        <NavBarLink title={"praktisk"} />
        <NavBarLink title={"transport"} />
        <NavBarLink title={"priser"} />
      </nav>
    </div>
  );
};

export default Navbar;
