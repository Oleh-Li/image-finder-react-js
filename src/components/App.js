import React, { Fragment, Component } from "react";
import "./App.css";
import * as services from "../services/photosApi";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import Spinner from "./loader/Loader";
import ErrorNotification from "./errorNotification/ErrorNotification";
import Button from "./button/Button";

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
    error: null,
    pageNum: 1,
    inputValue: "dog",
  };

  componentDidMount() {
    this.fetchPhotos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageNum !== this.state.pageNum) {
      services
        .fetchPhotosWithQuery(this.state.inputValue, this.state.pageNum)
        .then((data) =>
          this.setState((prevState) => ({
            photos: [...prevState.photos, ...mapper(data)],
          }))
        )
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  fetchPhotos = (value) => {
    this.setState({ isLoading: true });
    services
      .fetchPhotosWithQuery(value)
      .then((data) => this.setState({ photos: mapper(data) }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  loadMore = () => {
    return this.setState((prevState) => ({
      pageNum: (prevState.pageNum += 1),
    }));
  };

  queryChange = (value) => {
    this.setState({ inputValue: value });
  };

  render() {
    const { photos, isLoading, error, inputValue } = this.state;
    return (
      <div className="App">
        {error && <ErrorNotification text={error.response.data} />}
        {isLoading && <Spinner />}

        <Searchbar onSubmit={this.fetchPhotos} queryChange={this.queryChange} />
        {photos.length > 0 && inputValue && (
          <Fragment>
            <ImageGallery dataPhotoArr={photos} />
            <Button loadMore={this.loadMore} />
          </Fragment>
        )}
      </div>
    );
  }
}
