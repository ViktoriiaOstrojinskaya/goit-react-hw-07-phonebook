import { Toaster } from 'react-hot-toast';
import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';
import { Box } from './App.styled';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading, selectError } from 'redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
      <Toaster />
    </Box>
  );
}
