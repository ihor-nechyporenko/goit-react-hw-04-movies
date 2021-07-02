import { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import routes from '../routes';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import Loader from '../components/Loader';
import Error from '../components/Error';
import api from '../service/movies-api';

import styles from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    title: null,
    overview: null,
    genres: [],
    poster_path: null,
    release_date: '',
    vote_average: null,
    credits: null,
    reviews: null,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    this.setState({ isLoading: true });

    api
      .fetchMovieDetails(movieId)
      .then(response => {
        this.setState({ ...response.data });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      title,
      overview,
      genres,
      poster_path,
      release_date,
      vote_average,
      credits,
      reviews,
      isLoading,
      error,
    } = this.state;

    const { match, location } = this.props;

    // fix 404 error in console
    let IMG_URL = 'https://image.tmdb.org/t/p/w500/';
    if (!poster_path) {
      IMG_URL = '';
    }

    const render = !isLoading && !error;
    const releseYear = release_date.slice(0, 4);

    return (
      <>
        <Button onClick={this.handleGoBack} />

        {isLoading && <Loader />}

        {render && (
          <div className={styles.container}>
            <img
              className={styles.poster}
              src={`${IMG_URL}${poster_path}`}
              alt={title}
              width="250"
            />
            <div className={styles.thumb}>
              <h2>
                {title} ({releseYear})
              </h2>
              <p>User Score: {vote_average}</p>
              <p className={styles.accent}>Overview</p>
              <p>{overview}</p>

              <ul className={styles.genres}>
                <p className={styles.accent + ' ' + styles.genres__title}>
                  Genres
                </p>
                <div className={styles.genres__thumb}>
                  {genres.map(({ id, name }) => (
                    <li key={String(id)}>{name}</li>
                  ))}
                </div>
              </ul>
            </div>
          </div>
        )}

        {error && <Error />}

        <p className={styles.additional__info}>Additional information</p>

        <Navigation
          route1={{
            link: {
              pathname: `${match.url}/cast`,
              state: { ...location.state },
            },
            label: 'Cast',
          }}
          route2={{
            link: {
              pathname: `${match.url}/reviews`,
              state: { ...location.state },
            },
            label: 'Reviews',
          }}
        />

        <Route
          path={`${match.url}/cast`}
          render={props => <Cast {...props} credits={credits} />}
        />
        <Route
          path={`${match.url}/reviews`}
          render={props => <Reviews {...props} reviews={reviews} />}
        />
      </>
    );
  }
}

MovieDetailsPage.defaultProps = {
  overview: '',
  poster_path: '',
  profile_path: '',
};

MovieDetailsPage.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  reviews: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        author_details: PropTypes.shape({
          username: PropTypes.string.isRequired,
        }),
      }),
    ),
  }),
  credits: PropTypes.shape({
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        character: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        profile_path: PropTypes.string,
      }),
    ),
  }),
};

export default MovieDetailsPage;
