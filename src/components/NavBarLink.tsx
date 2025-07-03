import { NavLink } from "react-router";

interface NavBarProps {
  title: string;
  defaultPage?: boolean;
}

const NavBarLink = ({ title, defaultPage }: NavBarProps) => (
  <NavLink
    style={({ isActive }) => ({
      textDecoration: isActive ? "underline" : "none",
    })}
    to={defaultPage ? "/" : "/" + title}
  >
    {title}
  </NavLink>
);

export default NavBarLink;
