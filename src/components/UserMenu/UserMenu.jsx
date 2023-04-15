import { Box, Button } from "@mui/material";
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
        <Box
            display="flex"
            gap="20px"
            justifyContent="flex-end"
            paddingBottom="15px"
            borderBottom="1px solid #383838"
        >
            <p>
                {userEmail}
            </p>
            <Button
                type='button'
                onClick={handleLogout}
                variant="contained"
                size="small"
                sx={{
                    backgroundColor: "#fcba03",
                    color: "#000",
                    fontWeight: "900",
                    '&:hover': {
                        backgroundColor: "#176ca4",
                        color: "#fff",
                    }
                }}
    
            >
                Logout
            </Button>

        </Box>
    );
};