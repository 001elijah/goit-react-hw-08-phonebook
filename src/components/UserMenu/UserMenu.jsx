import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { currentUserLogout } from "redux/auth/authOperations";
import { selectUser } from "redux/auth/authSelectors";

import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

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
            justifyContent="space-between"
            paddingBottom="15px"
            borderBottom="1px solid #383838"
        >
            <Box
                display="flex"
                alignItems="center"
                gap="5px"
            >
                <AccountCircleTwoToneIcon />
                {userEmail}
            </Box>
            <Button
                type='button'
                onClick={handleLogout}
                variant="contained"
                size="small"
                sx={{
                    backgroundColor: "#fcba03",
                    color: "#000",
                    fontWeight: "900",
                    fontSize: 16,
                    textTransform: 'capitalize',
                    '&:hover': {
                        backgroundColor: "#176ca4",
                        color: "#fff",
                    }
                }}
            >
                Logout
                <LogoutTwoToneIcon />
            </Button>

        </Box>
    );
};