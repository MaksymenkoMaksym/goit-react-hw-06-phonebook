import { nanoid } from 'nanoid';
import React, { Component, useState, useEffect } from 'react';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactsList from './ContactsList/ContactsList';
import Section from './Section/Section';
import InputSearch from './InputSearch/InputSearch';

export const App1 = () => {
  const [filter, setFilter] = useState('');

  const [contacts, setContacts] = useState(() => {
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

  useEffect(() => {
    localStorage.setItem('contacts1', JSON.stringify(contacts));
  }, [contacts]);

  const onInputContact = user => {
    if (contacts.some(contact => contact.name === user.name)) {
      return alert(`${user.name} is already in contacts.`);
    }
    user.id = nanoid();
    setContacts(prevState => [...prevState, user]);
  };

  const findByName = value => {
    const name = value.trim().toLocaleLowerCase();
    if (!name) {
      setFilter(name);
      return;
    }
    const res = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(name)
    );
    setFilter(res);
  };

  const onClickDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
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