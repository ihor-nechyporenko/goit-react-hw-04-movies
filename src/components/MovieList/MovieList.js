import { Link, withRouter } from 'react-router-dom';

import MoviePreview from '../MoviePreview';

const MovieList = ({ movies, match, path = '' }) => (
  <ul>
    {movies.map(({ id, title, poster_path }) => (
      <li key={id}>
        <Link to={`${match.url}${path}/${id}`}>
          <MoviePreview title={title} poster_path={poster_path} />
        </Link>
      </li>
    ))}
  </ul>
);

export default withRouter(MovieList);
