import React, { Component } from "react";
import styles from "./Searchbar.module.css";

// const Searchbar = ({ value, onChange, onSearch }) => {
//   return (
//     <header className={styles.Searchbar}>
//       <form className={styles.SearchForm}>
//         <button
//           type="button"
//           className={styles.SearchFormButton}
//           onClick={onSearch}
//         >
//           <span className={styles.SearchFormButtonLabel}>Search</span>
//         </button>

//         <input
//           onChange={onChange}
//           className={styles.SearchFormInput}
//           value={value}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     </header>
//   );
// };

// export default Searchbar;

export default class Searchbar extends Component {
  state = { value: "" };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.queryChange(this.state.value);
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className={styles.SearchFormInput}
            value={value}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
