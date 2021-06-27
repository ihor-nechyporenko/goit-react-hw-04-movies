import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import MoviePreview from '../MoviePreview';
import styles from './MovieList.module.css';

const MovieList = ({ movies, match, location, path = '' }) => (
  <ul className={styles.list}>
    {movies.map(({ id, title, poster_path }) => (
      <li className={styles.item} key={String(id)}>
        <Link
          to={{
            pathname: `${match.url}${path}/${id}`,
            state: { from: location },
          }}
        >
          <MoviePreview title={title} poster_path={poster_path} />
        </Link>
      </li>
    ))}
  </ul>
);

MovieList.defaultProps = {
  poster_path: '',
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }),
  ).isRequired,
};

export default withRouter(MovieList);
