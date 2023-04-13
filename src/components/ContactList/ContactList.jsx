import Contact from "components/Contact/Contact";

import s from './ContactList.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectorFilteredContacts } from "redux/contactsSelectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/contactsOperations";

const ContactList = () => {
    
    const contacts = useSelector(selectorFilteredContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

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