import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map(({ id, urls, alt_description }) => (
        <li key={id}>
          <ImageCard urls={urls} alt_description={alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
