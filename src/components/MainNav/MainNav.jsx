// import clsx from "clsx";
import { UserMenu } from "components/UserMenu/UserMenu";
import {
    // useDispatch,
    useSelector
} from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAuthorised } from "redux/authSelectors";
// import { selectorTheme } from "redux/theme/themeSelectors";
// import { themeToggle } from "redux/theme/themeSlice";
// import s from "./MainNav.module.scss";

// const getLinkActiveClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const MainNav = () => {
//   const dispatch = useDispatch();
//   const theme = useSelector(selectorTheme);
    const authorized = useSelector(selectAuthorised);

  return (
    <nav>
      {/* <button
        className={clsx(s.btnToggle, theme === "dark" && s.dark)}
        onClick={() => dispatch(themeToggle())}
      >
        ThemeToggle <br />
        <span>{theme}</span>
      </button> */}
      <ul>
        {!authorized ?
          <>
            <li>
              <NavLink to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup">
                Sign up
              </NavLink>
            </li>
          </>
          :
          <UserMenu/>
        }
      </ul>
    </nav>
  );
};

export default MainNav;