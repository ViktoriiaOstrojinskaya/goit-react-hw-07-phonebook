import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';
import { Box } from './App.styled';

export default function App() {
  return (
    <Box>
      <Title title="HW-7" />
      <Title title="Phonebook" />
      <ContactForm />
      <Title title="Contacts" />
      <Filter />
      <ContactList />
    </Box>
  );
}
