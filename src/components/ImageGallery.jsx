import { ImageGalleryItem } from './ImageGalleryItem';
import { ImageGallary } from 'styles/stylesImageGallery';

export const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <>
      <ImageGallary>
        <ImageGalleryItem images={images} onOpenModal={onOpenModal} />
      </ImageGallary>
    </>
  );
};
