import { Overlay, Modalka } from '../styles/stylesModal';

export const Modal = ({ modalPhoto }) => {
  return (
    <Overlay id="overlay">
      <Modalka>
        <img src={modalPhoto} alt="modalPhoto" />
      </Modalka>
    </Overlay>
  );
};
