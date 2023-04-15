import { createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContacts, removeContact } from "./contactsOperations";
import { currentUserLogout, getCurrentUserData, login, signup } from "./authOperations";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    // reducers: {                                      // using createAsyncThunk() we don't need reducers:
        // fetchingInProgress(state) {
        //     state.isLoading = true;
        // },
        // fetchingSuccess(state, { payload }) {
        //     state.isLoading = false;
        //     state.error = null;
        //     state.items = payload;
        // },
        // fetchingError(state, { payload }) {
        //     state.isLoading = false;
        //     state.error = payload;
        // },
        // addingInProgress(state) {
        //    state.isLoading = true; 
        // },
        // addingSuccess(state, { payload }) {
        //     state.isLoading = false;
        //     state.error = null;
        //     state.items.push(payload); //immer under hood
        // },
        // addingError(state, { payload }) {
        //     state.isLoading = false;
        //     state.error = payload;
        // },
        // removingInProgress(state) {
        //    state.isLoading = true; 
        // },
        // removingSuccess(state, { payload }) {
        //     state.isLoading = false;
        //     state.error = null;
        //     state.items = [...state.contacts.filter(contact => contact.id !== payload.id)]; //immer under hood
        // },
        // removingError(state, { payload }) {
        //     state.isLoading = false;
        //     state.error = payload;
        // }
    // },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items = payload;
            })
            .addCase(addContact.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(payload); //immer under hood
                
            })
            .addCase(removeContact.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items = [...state.items.filter(contact => contact.id !== payload)]; //immer under hood
            })
            .addCase(signup.fulfilled, state => {
                state.isLoading = false;
            })
            .addCase(login.fulfilled, state => {
                state.isLoading = false;
            })
            .addCase(getCurrentUserData.fulfilled, state => {
                state.isLoading = false;
            })
            .addCase(currentUserLogout.fulfilled, state => {
                state.isLoading = false;
            })
            .addMatcher(
                action => action.type.endsWith('/pending'),
                state => {
                    state.isLoading = true;
                }
        )
            .addMatcher(
                action => (action.type.startsWith('contacts') || action.type.startsWith('auth')) && action.type.endsWith('/rejected'),
                (state, { payload }) => {
                    state.isLoading = false;
                    state.error = payload;
                }
        )
    }
});

// export const {
//     fetchingInProgress,
//     fetchingSuccess,
//     fetchingError,
//     addingInProgress,
//     addingSuccess,
//     addingError,
//     removingInProgress,
//     removingSuccess,
//     removingError
// } = contactsSlice.actions;
export default contactsSlice.reducer;