import {
    useSelector
} from "react-redux";
import { selectAuthorized } from "redux/auth/authSelectors";
import { List, NavItem } from "./MainNav.style";

const MainNav = () => {
    const authorized = useSelector(selectAuthorized);

  return (
    <>
      {!authorized && <h1>☎️ Phonebook ☎️</h1>}
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