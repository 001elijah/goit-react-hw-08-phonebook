import { useDispatch, useSelector } from "react-redux";
import { currentUserLogout } from "redux/authOperations";
import { selectUser } from "redux/authSelectors";

export const UserMenu = () => {
    const userEmail = useSelector(selectUser).email;
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(currentUserLogout());
    };

    return (
        <div>
            <p>
                {userEmail}
            </p>
            <button type='button' onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};