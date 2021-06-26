import { Component } from 'react';
import { Route } from 'react-router-dom';

import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import routes from '../routes';
import Navigation from '../components/Navigation';
import api from '../service/movies-api';

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
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    api.fetchMovieDetails(movieId).then(response => {
      this.setState({ ...response.data });
    });
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
    } = this.state;

    const { match } = this.props;

    // fix 404 error in console
    let IMG_URL = 'https://image.tmdb.org/t/p/original/';
    if (!poster_path) {
      IMG_URL = '';
    }

    const releseYear = release_date.slice(0, 4);

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>

        <h1>Movie details {match.params.movieId}</h1>

        <img src={`${IMG_URL}${poster_path}`} alt={title} width="200" />
        <h2>
          {title} ({releseYear})
        </h2>
        <p>User Score: {vote_average}</p>
        <p>Overview</p>
        <p>{overview}</p>

        <ul>
          <p>Genres</p>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>

        <p>Additional information</p>

        <Navigation
          route1={{ link: `${match.url}/cast`, label: 'Cast' }}
          route2={{ link: `${match.url}/reviews`, label: 'Reviews' }}
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

export default MovieDetailsPage;
