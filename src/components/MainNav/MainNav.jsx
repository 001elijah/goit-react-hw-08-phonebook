import {
    useSelector
} from "react-redux";
import { selectAuthorised } from "redux/auth/authSelectors";
import { List, NavItem } from "./MainNav.style";

const MainNav = () => {
    const authorized = useSelector(selectAuthorised);

  return (
    <>
      {!authorized &&
      <nav>
        <List>
            <li>
              <NavItem to="/login">
                Login
              </NavItem>
            </li>
            <li>
              <NavItem to="/signup">
                Sign up
              </NavItem>
            </li>
        </List>
        </nav>
      }
    </>
  );
};

export default MainNav;