import styles from './Button.module.css';

const Button = ({ onClick }) => (
  <button className={styles.button} type="button" onClick={onClick}>
    Go back
  </button>
);

export default Button;
