import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilter = state => state.filter.query;

export const selectorFilteredContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filterQuery) => {
        if (filterQuery === '' || filterQuery === undefined) return contacts;
        return contacts.filter(contact => contact.name.toLowerCase().includes(filterQuery.toLowerCase()));
});