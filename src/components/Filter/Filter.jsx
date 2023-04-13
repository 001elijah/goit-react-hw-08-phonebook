import { filter as applyFilter } from 'redux/filterSlice';

import s from './Filter.module.css';
import { useDispatch } from "react-redux";

const Filter = () => {
    const dispatch = useDispatch();
    return (
        <form className={s.Form}>
            <label htmlFor="">
                Find contacts by name<br />
                <input type="text"
                onChange={evt => {
                    dispatch(applyFilter(evt.target.value))
                }}/>
            </label>
        </form>
    );

};

export default Filter;