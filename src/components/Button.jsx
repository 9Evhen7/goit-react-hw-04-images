import { LodeMoreBtn } from 'styles/stylesButton';
import PropTypes from 'prop-types';

export const Button = ({ onLodeMore }) => {
  return (
    <LodeMoreBtn type="button" onClick={onLodeMore}>
      Lode more
    </LodeMoreBtn>
  );
};

Button.propTypes = {
  onLodeMore: PropTypes.func,
};
