import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <li className={s.item} key={image.id}>
          <ImageCard image={image} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
