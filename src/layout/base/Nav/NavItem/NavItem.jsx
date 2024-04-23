import { NavLink } from "react-router-dom";

const NavItem = ({ children, path }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          [isActive ? "text-[#9877ce]" : "text-white"] +
          ` px-4 py-3 inline-block transition-colors duration-200 hover:text-[#9877ce] font-semibold text-lg`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
