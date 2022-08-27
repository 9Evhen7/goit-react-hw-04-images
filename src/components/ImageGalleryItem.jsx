import { GallaryItem } from 'styles/styleImageGallaryItem';
import { Image } from 'styles/styselGallaryImage';

export const ImageGalleryItem = ({ images, onOpenModal }) => {
  return images.map(image => {
    return (
      <GallaryItem key={image.id}>
        <Image
          src={image.webformatURL}
          alt="parsed pic"
          onClick={() => {
            onOpenModal(image.largeImageURL);
          }}
        />
      </GallaryItem>
    );
  });
};
