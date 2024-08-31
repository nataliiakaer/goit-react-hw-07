export const getContacts = (state) => state.contacts.items;

export const getError = (state) => state.contacts.error;

export const getIsLoading = (state) => state.contacts.loading;

export const getValueFilter = (state) => state.filters.name;
