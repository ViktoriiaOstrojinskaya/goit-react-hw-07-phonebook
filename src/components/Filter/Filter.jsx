import { FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'redux/filterSlice';
import { selectFilters } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const input = useSelector(selectFilters);

  const handleFilter = event => {
    const value = event.target.value.toLowerCase();
    dispatch(setContactsFilter(value));
  };

  return (
    <label>
      Find contacts by name
      <FilterInput type="text" value={input} onChange={handleFilter} />
    </label>
  );
};
