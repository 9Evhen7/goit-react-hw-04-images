import {
  SearchbarHeader,
  SearchbarForm,
  FormBtn,
  FormInput,
} from '../styles/styleSearchbar';
import { BiSearchAlt } from 'react-icons/bi';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarHeader>
      <SearchbarForm onSubmit={e => onSubmit(e, e.target.elements.input.value)}>
        <FormBtn type="submit">
          <BiSearchAlt size={28} />
        </FormBtn>

        <FormInput
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchbarForm>
    </SearchbarHeader>
  );
};
