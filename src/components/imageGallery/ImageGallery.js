import styles from "./imageGallery.module.css";
import PropTypes from "prop-types";

const ImageGallery = ({ dataPhotoArr }) => {
  const photosArr = dataPhotoArr.map(({ id, url, alt }) => {
    return (
      <li key={id} className={styles.ImageGalleryItem}>
        <img src={url} alt={alt} className={styles.ImageGalleryItemImage} />
      </li>
    );
  });
  return <ul className={styles.ImageGallery}>{photosArr}</ul>;
};

ImageGallery.propTypes = {
  dataPhotoArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      alr: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
