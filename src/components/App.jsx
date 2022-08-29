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

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      const response = await axios.get(`&q=${query}&page=${page}`);
      try {
        const arrayOfImages = response.data.hits.map(
          ({ id, webformatURL, largeImageURL }) => {
            const imgObj = {
              id,
              webformatURL,
              largeImageURL,
            };
            return imgObj;
          },
        );

        if (page !== 1) {
          this.setState({ images: [...prevState.images, ...arrayOfImages] });
        } else {
          this.setState({ images: [...arrayOfImages] });
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  onSearchBarSubmit = (e, query) => {
    e.preventDefault();
    this.setState({ loading: true, query, page: 1 });
  };

  onLodeMore = () => {
    this.setState({ loading: true });
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  onOpenModal = imgURL => {
    this.setState({ modal: true, modalPhoto: imgURL });
  };

  onCloseModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { onSearchBarSubmit, onLodeMore, onOpenModal } = this;
    const { images, loading, modal, modalPhoto } = this.state;
    return (
      <>
        <Searchbar onSubmit={onSearchBarSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} onOpenModal={onOpenModal} />
        )}
        {images.length > 0 && <Button onLodeMore={onLodeMore} />}
        {loading && <Loader />}
        {modal && (
          <Modal modalPhoto={modalPhoto} onCloseModal={this.onCloseModal} />
        )}
      </>
    );
  }
}
