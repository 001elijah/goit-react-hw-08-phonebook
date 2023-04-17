import { useSelector } from "react-redux";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { getError, getIsLoading } from "redux/contacts/contactsSelectors";
import { selectAuthorized } from "redux/auth/authSelectors";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Alert, Box } from "@mui/material";

export const ContactPage = () => {
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const authorized = useSelector(selectAuthorized);
    return (
        <Box
            padding="0 30px"
        >
            {authorized && <UserMenu />}
                
            <h1>☎️ Phonebook ☎️</h1>
            <ContactForm />
            
            <h2>Contacts</h2>
            <Filter />
            {isLoading && <Alert variant="filled" severity="info" sx={{ mt: 2, mb: 2 }}>Loading contacts...</Alert>}
            {error && <Alert variant="filled" severity="warning" sx={{ mt: 2, mb: 2 }}>{error}</Alert>}
            <ContactList/>
        </Box>
    );
};