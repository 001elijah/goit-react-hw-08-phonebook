import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk("contacts/fetch",
    async (_, thunkApi) => {
        const { token } = thunkApi.getState().authorized;
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
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
    async ({ name, number }, thunkApi) => {
        const { items } = thunkApi.getState().contacts;
        const found = items.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (found) {
            return thunkApi.rejectWithValue(`${name} is already in contacts`);
        };
        try {
            const response = await axios.post('/contacts', { name, number });
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