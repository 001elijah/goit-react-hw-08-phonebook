import { addContact } from "redux/contacts/contactsOperations";

import s from './ContactForm.module.css'
import { useDispatch } from "react-redux";
import { TextField, Alert } from '@mui/material';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import { useFormik } from "formik";
import * as Yup from 'yup';

const AddContactSchema = Yup.object().shape({
   name: Yup.string()
        .required('Required')
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, { message: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan", excludeEmptyString: true }),
   number: Yup.string()
        .required('Required')
        .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, { message: "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +", excludeEmptyString: true }),
 });

const ContactForm = () => {
    const formik = useFormik({
     initialValues: {
       name: '',
       number: '',
     },
     onSubmit: values => {
         dispatch(addContact(values));
        },
     validationSchema: AddContactSchema,
   });
    const dispatch = useDispatch();

    return (
        <>
            <form className={s.Form} onSubmit={formik.handleSubmit}>

                    <TextField
                        size="small"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Type contact name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        sx={{
                            width: '100%',
                          }}
                    />
                    {formik.errors.number && formik.touched.name && <Alert sx={{ width: '100%' }} severity="warning">{formik.errors.name}</Alert>}
                    <TextField
                        size="small"
                        id="number"
                        name="number"
                        type="text"
                        placeholder="Type contact number"
                        onChange={formik.handleChange}
                        value={formik.values.number}
                        sx={{
                            width: '100%',
                          }}
                    />
                    {formik.errors.number && formik.touched.number && <Alert sx={{ width: '100%' }} severity="warning">{formik.errors.number}</Alert>}
                <button className={s.Button} type="submit">Add contact <AddCircleOutlineTwoToneIcon /></button>
            </form>
        </>
    );
};

export default ContactForm;