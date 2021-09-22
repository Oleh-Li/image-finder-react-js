import React from "react";
import "./App.css";
import Searchbar from "./searchbar/Searchbar";

export default class App extends React.Component {
  state = {
    inputValue: "",
  };

  handleSubmit = (text) => {
    this.setState({ inputValue: text });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}
