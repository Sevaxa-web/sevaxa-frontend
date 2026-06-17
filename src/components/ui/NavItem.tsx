import { NavLink } from "react-router-dom";

type NavItemProps = {
  title: string;
  to: string;
};

export default function NavItem({ title, to }: NavItemProps) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "nav-link-text active" : "nav-link-text"
        }
      >
        {title}
      </NavLink>
    </li>
  );
}
