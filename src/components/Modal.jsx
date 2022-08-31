import { Overlay, Modalka } from '../styles/stylesModal';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  constructor(props) {
    super(props);
    const { modalPhoto, onCloseModal } = this.props;
    this.photo = modalPhoto;
    this.closeModal = onCloseModal;
  }

  onEscape = event => {
    const { closeModal } = this;
    if (event.key === 'Escape') {
      closeModal();
    }
  };
  onOverLayClick = event => {
    const { closeModal } = this;
    const overlay = document.getElementById('overlay');
    if (event.target === overlay) {
      closeModal();
    }
  };

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

  render() {
    // const { modalPhoto } = this.props;
    return (
      <Overlay id="overlay">
        <Modalka>
          <img src={this.photo} alt="modalPhoto" />
        </Modalka>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  onCloseModal: PropTypes.func,
  modalPhoto: PropTypes.string,
};
