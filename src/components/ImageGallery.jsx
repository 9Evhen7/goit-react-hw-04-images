import { ImageGalleryItem } from './ImageGalleryItem';
import { ImageGallary } from 'styles/stylesImageGallery';
import { GallaryItem } from 'styles/styleImageGallaryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <>
      <ImageGallary>
        {images.map(image => {
          return (
            <GallaryItem key={image.id}>
              <ImageGalleryItem image={image} onOpenModal={onOpenModal} />
            </GallaryItem>
          );
        })}
      </ImageGallary>
    </>
  );
};

ImageGallary.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  onOpenModal: PropTypes.func,
};
