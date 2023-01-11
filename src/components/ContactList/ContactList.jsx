import {
  List,
  ListItem,
  ListTitle,
  ButtonDelete,
  ContactItem,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilters } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectContacts);
  const filterName = useSelector(selectFilters);

  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <List>
      <ListTitle>
        {filteredContacts.length === 0
          ? 'We didn`t find contacts your request 😭'
          : `You have ${filteredContacts.length} contacts`}
      </ListTitle>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ContactItem>
            {name}: {number}
          </ContactItem>
          <ButtonDelete
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </ButtonDelete>
        </ListItem>
      ))}
    </List>
  );
};
