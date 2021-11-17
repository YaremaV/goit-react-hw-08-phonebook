import { createSelector } from '@reduxjs/toolkit';
const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const filterCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterCase),
    );
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
export default { getFilter, getFilteredContacts };
