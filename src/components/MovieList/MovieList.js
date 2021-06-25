import { Link, withRouter } from 'react-router-dom';

import MoviePreview from '../MoviePreview';

const MovieList = ({ movies, match, location, path = '' }) => (
  <ul>
    {movies.map(({ id, title, poster_path }) => (
      <li key={id}>
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

export default withRouter(MovieList);
