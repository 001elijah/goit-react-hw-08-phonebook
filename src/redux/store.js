import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contactsSlice';
import {filterReducer} from './filterSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(),
    // preloadedState,
    // devTools: process.env.NODE_ENV === "production"// true/false - show/hide redux devtools state
});