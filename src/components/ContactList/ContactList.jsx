import Contact from "components/Contact/Contact";

import s from './ContactList.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectorFilteredContacts } from "redux/contacts/contactsSelectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/contactsOperations";
import { selectUser } from "redux/auth/authSelectors";

const ContactList = () => {
    
    const contacts = useSelector(selectorFilteredContacts);
    const user = Boolean(useSelector(selectUser));
    const dispatch = useDispatch();

    useEffect(() => {
        user && dispatch(fetchContacts());
    }, [dispatch, user]);

    return (
        <>
            { 
                contacts.length !== 0 ?
                    <ul className={s.List}>
                        {contacts.map(contact => <Contact key={contact.id} contactProp={contact} />)}
                    </ul> :
                    <p>😤 No contacts. Add some 😤</p>
            }
        </>
    );
};

export default ContactList;