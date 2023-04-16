import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filter(state, { payload }) {
            return {
                ...state,
                query: payload
            }
        }
    }
});

export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;