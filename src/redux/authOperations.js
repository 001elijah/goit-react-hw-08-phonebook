import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const axiosHeaderToken = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const signup = createAsyncThunk('auth/signup',
    async (newUserData, thunkApi) => {
        const { token } = thunkApi.getState().authorized;
        try {
            const response = await axios.post('/users/signup', newUserData);
            axiosHeaderToken.set(token);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
});

export const login = createAsyncThunk('auth/login',
    async (userData, thunkApi) => {
        const { token } = thunkApi.getState().authorized;
        try {
            const response = await axios.post('/users/login', userData);
            axiosHeaderToken.set(token);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
});

export const getCurrentUserData = createAsyncThunk('auth/getCurrentUserData',
    async (_, thunkApi) => {
        const { token } = thunkApi.getState().authorized;
        axiosHeaderToken.set(token);
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
            axiosHeaderToken.unset();
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)