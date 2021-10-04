import { Component, createRef } from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

export default class Modal extends Component {
  backDropRef = createRef();

  componentDidMount() {
    window.addEventListener("keydown", this.handlePressKey);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handlePressKey);
  }

  handlePressKey = (e) => {
    if (e.code !== "Escape") return;
    this.props.closeModal();
  };

  handleBackDropClick = (e) => {
    const { current } = this.backDropRef;
    if (current && e.target !== current) return;
    this.props.closeModal();
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <div
        className={styles.Overlay}
        onClick={this.handleBackDropClick}
        ref={this.backDropRef}
      >
        <div className={styles.Modal}>
          <img src={largeImageURL} alt="largePic" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
};
