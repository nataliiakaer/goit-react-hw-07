import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectError = (state) => state.contacts.error;

export const selectIsLoading = (state) => state.contacts.loading;

export const selectValueFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectValueFilter],
  (contacts, filter) =>
    contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    })
);
