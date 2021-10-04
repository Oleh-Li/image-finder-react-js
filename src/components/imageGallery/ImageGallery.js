import { Component, createRef } from "react";
import styles from "./imageGallery.module.css";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

export default class ImageGallery extends Component {
  listRef = createRef();
  componentDidUpdate(prevProps, prevState) {
    if (this.props.dataPhotoArr !== prevProps.dataPhotoArr) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }
  render() {
    const { dataPhotoArr, onLargeImageURL } = this.props;
    return (
      <ul
        ref={this.listRef}
        className={styles.ImageGallery}
        onClick={this.handleClicklPic}
      >
        <ImageGalleryItem
          photos={dataPhotoArr}
          onLargeImageURL={onLargeImageURL}
        />
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  dataPhotoArr: PropTypes.array.isRequired,
  onLargeImageURL: PropTypes.func.isRequired,
};
