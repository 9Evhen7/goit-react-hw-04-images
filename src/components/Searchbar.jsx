import {
  SearchbarHeader,
  SearchbarForm,
  FormBtn,
  FormInput,
} from '../styles/styleSearchbar';
import { BiSearchAlt } from 'react-icons/bi';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  onChange = value => {
    this.setState({ value });
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <>
        <SearchbarHeader>
          <SearchbarForm
            onSubmit={e => {
              onSubmit(e, this.state.value);
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
              onChange={e => this.onChange(e.target.value)}
            />
          </SearchbarForm>
        </SearchbarHeader>
      </>
    );
  }
}

Searchbar.propTupes = {
  onSubmit: PropTypes.func,
};
