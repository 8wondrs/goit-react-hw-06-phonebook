import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem.jsx';
import { List, ListItem } from './ContactList.styled.jsx';
import PropTypes from 'prop-types';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const { input } = useSelector(getFilter);

  if (!contacts) {
    return null;
  }

  const visibleContacts = contacts.value.filter(contact =>
    contact.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <List>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactItem contact={contact} />
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.object,
  input: PropTypes.string,
};
