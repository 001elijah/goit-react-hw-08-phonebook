import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const signup = createAsyncThunk('auth/signup',
    async (newUserData, thunkApi) => {
        try {
            const response = await axios.post('/users/signup', newUserData);
            token.set(response.data.token);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
});

export const login = createAsyncThunk('auth/login',
    async (userData, thunkApi) => {
        try {
            const response = await axios.post('/users/login', userData);
            token.set(response.data.token);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
});

export const getCurrentUserData = createAsyncThunk('auth/getCurrentUserData',
    async (_, thunkApi) => {
        const { token } = thunkApi.getState().authorized;
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        try {
            const userData = await axios.get('/users/current');
            return userData.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    },
    {
        condition: (_, thunkApi) => {
            const { token } = thunkApi.getState().authorized;
            return Boolean(token);
        }
    }
);

export const currentUserLogout = createAsyncThunk('auth/logout',
    async (_, thunkApi) => {
        try {
            await axios.post('/users/logout');
            token.unset();
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)