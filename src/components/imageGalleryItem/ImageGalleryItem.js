import styles from "./imageGalleryItem.module.css";
import PropTypes from "prop-types";
import { Component, createRef } from "react";

export default class ImageGalleryItem extends Component {
  galleryRef = createRef();

  componentDidMount() {
    window.addEventListener("click", this.handleClicklPic);
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.handleClicklPic);
  }

  handleClicklPic = (e) => {
    e.target.id && this.props.onLargeImageURL(e.target.id);
  };

  photosArr = (arr) =>
    arr.map(({ id, url, alt }) => (
      <li key={id} className={styles.ImageGalleryItem}>
        <img
          onClick={this.handleClicklPic}
          ref={this.galleryRef}
          id={id}
          src={url}
          alt={alt}
          className={styles.ImageGalleryItemImage}
        />
      </li>
    ));

  render() {
    const { photos } = this.props;
    return this.photosArr(photos);
  }
}

ImageGalleryItem.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
};

