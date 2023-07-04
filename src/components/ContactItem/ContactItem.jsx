import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Span, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <Span>
        {contact.name}: <Span>{contact.number}</Span>
      </Span>
      <Button onClick={handleDelete}>delete</Button>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object,
};
