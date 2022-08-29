import { Image } from 'styles/styselGallaryImage';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image, onOpenModal }) => {
  const { webformatURL, largeImageURL } = image;
  return (
    <Image
      src={webformatURL}
      alt="parsed pic"
      onClick={() => {
        onOpenModal(largeImageURL);
      }}
    />
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
  onOpenModal: PropTypes.func,
};
