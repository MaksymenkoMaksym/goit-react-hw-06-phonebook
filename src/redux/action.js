export const getDeleteContact = id => ({
  type: 'contacts/getDeleteContact',
  payload: id,
});

export const getAddContact = user => ({
  type: 'contacts/getAddContact',
  payload: user,
});

export const getFindByName = contact => ({
  type: 'contacts/getFindByName',
  payload: contact,
});
