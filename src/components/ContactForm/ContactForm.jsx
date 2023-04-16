import shortid from "shortid";
import { useState } from "react";

import { addContact } from "redux/contacts/contactsOperations";

import s from './ContactForm.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/contacts/contactsSelectors";
import { TextField, InputLabel } from '@mui/material';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleChange = evt => {
        evt.target.name === 'name' ?
        setName(evt.target.value) :
        setNumber(evt.target.value);
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(addContact({contacts, name, number, id: shortid.generate()}));
        reset();
    };

    return (
        <form className={s.Form} onSubmit={handleSubmit}>
            <InputLabel htmlFor="">
                Name:<br />
                <TextField
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChange}
                    size="small"
                />
            </InputLabel><br /><br />
            <InputLabel htmlFor="">
                Number:<br />
                <TextField
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                    size="small"
                />
            </InputLabel><br /><br />
            <button className={s.Button} type="submit">Add contact <AddCircleOutlineTwoToneIcon /></button>
        </form>
    );
};

export default ContactForm;