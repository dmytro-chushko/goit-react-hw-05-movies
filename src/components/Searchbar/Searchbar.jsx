import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { FcSearch } from 'react-icons/fc';
import {
  SearchForm,
  SearchFormInput,
  SearchButton,
  SearchButtonLabel,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={({ search }) => onSubmit(search)}
    >
      <SearchForm>
        <SearchButton type="submit">
          <FcSearch size={24} />
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>
        <SearchFormInput
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Formik>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
