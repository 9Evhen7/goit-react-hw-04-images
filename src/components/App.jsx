import { useState, useEffect } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';

const apiKey = '28351682-e2b71875895c72fa7531eac7b';
axios.defaults.baseURL = `https://pixabay.com/api/?per_page=12&key=${apiKey}&image_type=photo&orientation=horizontal`;

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoding] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState('');

  useEffect(() => {
    async function lodeImages() {
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
          setImages(prevState => [...prevState, ...arrayOfImages]);
        } else {
          setImages([...arrayOfImages]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoding(false);
      }
    }
    if (query === '') {
      return;
    } else lodeImages();
  }, [query, page]);

  const onSearchBarSubmit = (e, query) => {
    e.preventDefault();
    setLoding(true);
    setQuery(query);
    setPage(1);
  };

  const onLodeMore = () => {
    setLoding(true);
    setPage(prevPage => prevPage + 1);
  };

  const onOpenModal = imgURL => {
    setModal(true);
    setModalPhoto(imgURL);
  };

  const onCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      <Searchbar onSubmit={onSearchBarSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} onOpenModal={onOpenModal} />
      )}
      {images.length > 0 && <Button onLodeMore={onLodeMore} />}
      {loading && <Loader />}
      {modal && <Modal modalPhoto={modalPhoto} onCloseModal={onCloseModal} />}
    </>
  );
};
