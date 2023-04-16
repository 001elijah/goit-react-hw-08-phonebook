import { filter as applyFilter } from 'redux/filter/filterSlice';

import s from './Filter.module.css';
import { useDispatch } from "react-redux";

import { InputLabel, TextField } from '@mui/material';

const Filter = () => {
    const dispatch = useDispatch();
    return (
        <form className={s.Form}>
            <InputLabel htmlFor="">
                Find contacts by name<br />
                <TextField type="text"
                onChange={evt => {
                    dispatch(applyFilter(evt.target.value))
                    }}
                size="small"
                />
            </InputLabel>
        </form>
    );

};

export default Filter;