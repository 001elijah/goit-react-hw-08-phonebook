import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://64342f101c5ed06c9591510a.mockapi.io';

export const fetchContacts = createAsyncThunk("contacts/fetch",
    async (_, thunkApi) => {
        try {
            const response = await axios.get('/contacts');
            if (response.data.length === 0) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    },
    {
    condition: (_, { getState }) => { //перевірка чи відрендерені вже айтеми
            const { items } = getState().contacts;
            if (!items.length) return true;
            return false;
    },
  },
)

export const addContact = createAsyncThunk(
    'contacts/add',
    async ({ contacts, name, number, id }, thunkApi) => {
        const found = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()); // винести перевірку в condition в operations
        if (found) {
            // alert(`${name} is already in contacts.`);
            return thunkApi.rejectWithValue(`${name} is already in contacts`);
        };
        try {
            const response = await axios.post('/contacts', { name, phone: number, contactId: id });
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    },
)

export const removeContact = createAsyncThunk(
    'contacts/remove',
    async (id, thunkApi) => {
        try {
            await axios.delete(`/contacts/${id}`);
            return id;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    },
)

// import {
//     fetchingInProgress,
//     fetchingSuccess,
//     fetchingError,
//     addingInProgress,
//     addingSuccess,
//     addingError,
//     removingInProgress,
//     removingSuccess,
//     removingError
// } from './contactsSlice';

// export const fetchContacts = () => async dispatch => {
//     try {
//         dispatch(fetchingInProgress());
//         const response = await axios.get('/contacts');
//         dispatch(fetchingSuccess(response.data));
//         if (response.length === 0) {
//             throw new Error();
//         };
//         return response.data;
//     } catch (error) {
//         dispatch(fetchingError(error.message));
//     };
// };


// export const addContact = ({ name, number, id }) => async dispatch => {
//     try {
//         dispatch(addingInProgress());
//         const response = await axios.post('/contacts', { name, phone: number, contactId: id });
//         dispatch(addingSuccess(response.data));
//         return response.data;
//     } catch (error) {
//         dispatch(addingError(error.message));
//     }
// };

// export const removeContact = (id) => async dispatch => {
//     try {
//         dispatch(removingInProgress());
//         const response = await axios.delete(`/contacts/${id}`);
//         dispatch(removingSuccess(response.data));
//         return response.data;
//     } catch (error) {
//         dispatch(removingError(error.message));
//     }
// };