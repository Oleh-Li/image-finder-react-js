import React, { Fragment, Component } from "react";
import "./App.css";
import fetchPhotosWithQuery from "../services/photosApi";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import Spinner from "./loader/Loader";
import ErrorNotification from "./errorNotification/ErrorNotification";

const mapper = (articles) => {
  return articles.map(({ webformatURL: url, type: alt, ...props }) => ({
    url,
    alt,
    ...props,
  }));
};

export default class App extends Component {
  state = {
    isLoading: false,
    photos: [],
    inputValue: "",
    page: 1,
    error: null,
  };

  handleSubmit = (text) => {
    this.setState({ inputValue: text });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetchPhotosWithQuery(this.state.inputValue, this.state.page)
      .then((data) => this.setState({ photos: mapper(data) }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { photos, isLoading, error } = this.state;
    return (
      <div className="App">
        {error && <ErrorNotification text={error.response.data} />}
        {isLoading && <Spinner />}
        {photos.length > 0 && (
          <Fragment>
            <Searchbar onSubmit={this.handleSubmit} />
            <ImageGallery dataPhotoArr={photos} />
          </Fragment>
        )}
      </div>
    );
  }
}
