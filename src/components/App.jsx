import { nanoid } from 'nanoid';
// import React, { useState, useEffect } from 'react';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactsList from './ContactsList/ContactsList';
import Section from './Section/Section';
import InputSearch from './InputSearch/InputSearch';
import { useDispatch, useSelector } from 'react-redux';
import { getAddContact, getDeleteContact, getFindByName } from 'redux/action';
import { getContacts, getFilter } from 'redux/selectors';
export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onInputContact = user => {
    if (contacts.some(contact => contact.name === user.name)) {
      return alert(`${user.name} is already in contacts.`);
    }
    user.id = nanoid();
    dispatch(getAddContact(user));
  };

  const findByName = value => {
    const name = value.trim().toLocaleLowerCase();
    dispatch(getFindByName(name));
  };

  const onClickDelete = id => {
    dispatch(getDeleteContact(id));
  };
  return (
    <div>
      <Section title="PhoneBook -> Hook">
        <PhoneBookForm onInputContact={onInputContact} />
      </Section>

      <Section title="Contacts">
        <InputSearch
          nameSearch="Find contacts by name"
          onSearchName={findByName}
        />
        <ContactsList
          onClickDelete={onClickDelete}
          contacts={filter === '' ? contacts : filter}
        />
      </Section>
    </div>
  );
};

/*
  const [contactsR, setContacts] = useState(() => {
    const contact = localStorage.getItem('contacts1');
    try {
      if (contact) {
        const parsedContacts = JSON.parse(contact);
        return parsedContacts;
      }
      return [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
    } catch (error) {
      console.log(error);
    }
  });
  */
