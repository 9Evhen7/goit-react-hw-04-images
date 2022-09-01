import { Overlay, Modalka } from '../styles/stylesModal';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ modalPhoto, onCloseModal }) => {
  const onEscape = event => {
    if (event.key === 'Escape') {
      onCloseModal();
    }
  };
  const onOverLayClick = event => {
    const overlay = document.getElementById('overlay');
    if (event.target === overlay) {
      onCloseModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscape);
    window.addEventListener('click', onOverLayClick);

    return () => {
      window.removeEventListener('keydown', onEscape);
      window.removeEventListener('click', onOverLayClick);
    };
  });
  return (
    <Overlay id="overlay">
      <Modalka>
        <img src={modalPhoto} alt="modalPhoto" />
      </Modalka>
    </Overlay>
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func,
  modalPhoto: PropTypes.string,
};
