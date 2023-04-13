import PropTypes from "prop-types";

import { removeContact } from "redux/contactsOperations";

import s from './Contact.module.css';
import { useDispatch } from "react-redux";

const Contact = ({ contactProp }) => {
    const dispatch = useDispatch();
    return (
        <li className={s.Item}>
            <span className={s.Name}>{contactProp.name}: </span><span>{contactProp.phone} </span>
            <button className={s.Button} type="button" onClick={() => dispatch(removeContact(contactProp.id))}>Delete</button>
        </li>
    );
};

Contact.propTypes = {
    contactProp: PropTypes.object.isRequired
};

export default Contact;