import Spinner from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.wrapper}>
    <Spinner type="ThreeDots" color="#3f51b5" height={100} width={100} />
  </div>
);

export default Loader;
