import { Overlay, Modalka } from '../styles/stylesModal';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { modalPhoto: props.modalPhoto };
  }

  onCloseModal = () => {
    this.props.onCloseModal();
  };

  onEscape = event => {
    if (event.key === 'Escape') {
      this.onCloseModal();
    }
  };
  onOverLayClick = event => {
    const overlay = document.getElementById('overlay');
    if (event.target === overlay) {
      this.onCloseModal();
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
    return (
      <Overlay id="overlay">
        <Modalka>
          <img src={this.state.modalPhoto} alt="modalPhoto" />
        </Modalka>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  onCloseModal: PropTypes.func,
  modalPhoto: PropTypes.string,
};
