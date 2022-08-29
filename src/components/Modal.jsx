import { Overlay, Modalka } from '../styles/stylesModal';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    const { onEscape, onOverLayClick } = this;
    window.addEventListener('keydown', onEscape);
    window.addEventListener('click', onOverLayClick);
  }

  componentWillUnmount() {
    const { onEscape, onOverLayClick } = this;
    window.removeEventListener('keydown', onEscape);
    window.removeEventListener('click', onOverLayClick);
  }

  onEscape = event => {
    const { onCloseModal } = this.props;
    if (event.key === 'Escape') {
      onCloseModal();
    }
  };
  onOverLayClick = event => {
    console.log('click');
    const { onCloseModal } = this.props;
    const overlay = document.getElementById('overlay');
    if (event.target === overlay) {
      onCloseModal();
    }
  };
  render() {
    const { modalPhoto } = this.props;
    return (
      <Overlay id="overlay">
        <Modalka>
          <img src={modalPhoto} alt="modalPhoto" />
        </Modalka>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  onCloseModal: PropTypes.func,
  modalPhoto: PropTypes.string,
};
