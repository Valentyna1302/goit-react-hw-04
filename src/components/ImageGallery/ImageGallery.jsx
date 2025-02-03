import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items }) => {
  return (
    <ul className={s.list}>
      {items.map(({ id, urls, alt_description }) => (
        <li key={id}>
          <ImageCard urls={urls} alt_description={alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
