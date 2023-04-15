import { useSelector } from "react-redux";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { getError, getIsLoading } from "redux/contactsSelectors";

export const ContactPage = () => {
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    return (
        <>
            <h1>☎️ Phonebook ☎️</h1>
            <ContactForm />
            
            <h2>Contacts</h2>
            <Filter />
            {isLoading && <p>Loading contacts...</p>}
            {error && <p>😤 {error} 😤</p>}
            <ContactList/>
        </>
    );
};