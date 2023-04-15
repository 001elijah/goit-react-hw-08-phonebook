import { createSlice } from "@reduxjs/toolkit";
import { currentUserLogout, getCurrentUserData, login, signup } from './authOperations';
// доробити що не розлогінювалося
const authSlice = createSlice({
    name: 'authorized',
    initialState: {
        user: { name: null, email: null },
        token: null,
        authorized: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.authorized = true;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.authorized = true;
            })
            .addCase(getCurrentUserData.fulfilled, (state, { payload }) => {
                console.log(payload);
                state.user = payload;
                state.authorized = true;
            })
            .addCase(currentUserLogout.fulfilled, state => {
                state.user.name = null;
                state.user.email = null;
                state.token = null;
                state.authorized = false;
            })
    }
});

export default authSlice.reducer;