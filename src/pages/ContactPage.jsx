import { useSelector } from "react-redux";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { getError, getIsLoading } from "redux/contacts/contactsSelectors";
import { selectAuthorized } from "redux/auth/authSelectors";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Box } from "@mui/material";

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
            {isLoading && <p>Loading contacts...</p>}
            {error && <p>😤 {error} 😤</p>}
            <ContactList/>
        </Box>
    );
};