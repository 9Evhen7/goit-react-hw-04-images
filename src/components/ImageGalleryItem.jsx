import { GallaryItem } from 'styles/styleImageGallaryItem';

export const ImageGalleryItem = ({ images, onOpenModal }) => {
  return images.map(image => {
    return (
      <GallaryItem key={image.id}>
        <img
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
