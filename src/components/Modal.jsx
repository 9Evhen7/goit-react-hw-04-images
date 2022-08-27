import { Overlay, Modalka } from '../styles/stylesModal';

export const Modal = ({ modalPhoto }) => {
  return (
    <Overlay>
      <Modalka>
        <img src={modalPhoto} alt="modalPhoto" />
      </Modalka>
    </Overlay>
  );
};
