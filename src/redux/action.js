export const getDeleteContact = id => ({
  type: 'contacts/getDeleteContact',
  payload: id,
});

export const getAddContact = user => ({
  type: 'contacts/getAddContact',
  payload: user,
});

export const getFilterContacts = contact => ({
  type: 'contacts/getFilterContacts',
  payload: contact,
});
