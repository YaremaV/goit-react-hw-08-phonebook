import { createSelector } from '@reduxjs/toolkit';
const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

// const getFilteredContacts = state => {
//   const contacts = getAllContacts(state);
//   const filter = getFilter(state);

//   const filterCase = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filterCase),
//   );
// };

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const filterCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterCase),
    );
  },
);

export default { getFilter, getFilteredContacts };
