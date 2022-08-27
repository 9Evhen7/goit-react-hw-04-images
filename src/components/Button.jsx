import { LodeMoreBtn } from 'styles/stylesButton';

export const Button = ({ onLodeMore }) => {
  return (
    <LodeMoreBtn type="button" onClick={onLodeMore}>
      Lode more
    </LodeMoreBtn>
  );
};
