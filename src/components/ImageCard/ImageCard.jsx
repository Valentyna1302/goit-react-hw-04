import s from "./ImageCard.module.css";

const ImageCard = ({ urls, alt_description }) => {
  return (
    <div>
      <img
        className={s.img}
        src={urls.small}
        alt={alt_description || "Image"}
      />
    </div>
  );
};

export default ImageCard;
