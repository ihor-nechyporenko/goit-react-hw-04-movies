import styles from './MoviePreview.module.css';

const MoviePreview = ({ title, poster_path }) => {
  let IMG_URL = 'https://image.tmdb.org/t/p/w500/';

  if (!poster_path) {
    IMG_URL = '';
  }

  return (
    <>
      <img
        className={styles.item__img}
        src={`${IMG_URL}${poster_path}`}
        alt={title}
      />
      <p className={styles.item__title}>{title}</p>
    </>
  );
};

export default MoviePreview;
