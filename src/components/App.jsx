import { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';

const apiKey = '28351682-e2b71875895c72fa7531eac7b';
axios.defaults.baseURL = `https://pixabay.com/api/?per_page=12&key=${apiKey}&image_type=photo&orientation=horizontal`;

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    modal: false,
    modalPhoto: '',
  };

  onSearchBarSubmit = async (e, query) => {
    e.preventDefault();
    await this.setState({ loading: true });
    await this.setState({ query, page: 1 });

    try {
      const { query, page } = this.state;
      const response = await axios.get(`&q=${query}&page=${page}`);
      this.setState({ images: response.data.hits });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  onLodeMore = async () => {
    await this.setState({ loading: true });
    await this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
    try {
      const { query, page } = this.state;
      const response = await axios.get(`&q=${query}&page=${page}`);
      await this.setState(prevState => {
        return { images: [...prevState.images, ...response.data.hits] };
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  onOpenModal = imgURL => {
    this.setState({ modal: true, modalPhoto: imgURL });
    window.addEventListener('keydown', this.onEscape);
    window.addEventListener('click', this.onOverLayClick);
  };

  onCloseModal = () => {
    const { onEscape, onOverLayClick } = this;
    this.setState({ modal: false });
    window.removeEventListener('keydown', onEscape);
    window.removeEventListener('keydown', onOverLayClick);
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

  render() {
    const { onSearchBarSubmit, onLodeMore, onOpenModal } = this;
    const { images, loading, modal, modalPhoto } = this.state;
    return (
      <>
        <Searchbar onSubmit={onSearchBarSubmit} />
        <ImageGallery images={images} onOpenModal={onOpenModal} />
        {images.length > 0 ? <Button onLodeMore={onLodeMore} /> : <></>}
        {loading ? <Loader /> : <></>}
        {modal ? <Modal modalPhoto={modalPhoto} /> : <></>}
      </>
    );
  }
}
