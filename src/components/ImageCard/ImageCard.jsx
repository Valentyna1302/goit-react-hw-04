import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  const { urls, alt_description } = image;
  return (
    <div>
      <img
        className={s.img}
        src={urls.small}
        alt={alt_description || "Image"}
        onClick={() => onClick(image)}
      />
    </div>
  );
};

export default ImageCard;
