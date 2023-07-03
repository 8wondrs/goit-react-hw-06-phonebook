import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice.js';
import { Container, Title, Input } from './Filter.styled.jsx';
import PropTypes from 'prop-types';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    const name = e.target.value;
    dispatch(addFilter(name));
  };

  return (
    <Container>
      <Title>
        Find contacts by name
        <Input type="text" onChange={handleChange} />
      </Title>
    </Container>
  );
};

Filter.propTypes = {
  name: PropTypes.string,
  handleChange: PropTypes.func,
};
