import {
  SearchbarHeader,
  SearchbarForm,
  FormBtn,
  FormInput,
} from '../styles/styleSearchbar';
import { BiSearchAlt } from 'react-icons/bi';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const Searchbar = () => {
  const [value, setValue] = useState('');

  const onChange = query => {
    setValue(query);
  };

  const { onSubmit } = this.props;
  return (
    <>
      <SearchbarHeader>
        <SearchbarForm
          onSubmit={e => {
            onSubmit(e, value);
          }}
        >
          <FormBtn type="submit">
            <BiSearchAlt size={28} />
          </FormBtn>

          <FormInput
            name="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={e => onChange(e.target.value)}
          />
        </SearchbarForm>
      </SearchbarHeader>
    </>
  );
};

Searchbar.propTupes = {
  onSubmit: PropTypes.func,
};
