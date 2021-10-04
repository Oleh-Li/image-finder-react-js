import styles from "./Button.module.css";
import PropTypes from 'prop-types'

const Button = ({ loadMore }) => {
  return (
    <button onClick={loadMore} className={styles.button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired
}

export default Button;
