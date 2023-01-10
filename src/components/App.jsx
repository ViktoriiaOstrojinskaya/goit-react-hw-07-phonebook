import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';
import { Box } from './App.styled';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsLoading, getError } from 'redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <Title title="HW-7" />
      <Title title="Phonebook" />
      <ContactForm />
      <Title title="Contacts" />
      {isLoading && !error && <b>Request in progress...</b>}

      <Filter />
      <ContactList />
    </Box>
  );
}
