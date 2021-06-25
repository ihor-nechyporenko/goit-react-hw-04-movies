import { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

const API_KEY = '23ecc496bfc83d88818c3ec8956bc65d';
const BASE_URL = 'https://api.themoviedb.org/3/';

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

    const result = await axios
      .get(
        `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&append_to_response=reviews,credits`,
      )
      .then(response => response.data);

    this.setState({ ...result });

    console.log(result);
  }

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

    const IMG_URL = 'https://image.tmdb.org/t/p/original/';

    const releseYear = release_date.slice(0, 4);

    return (
      <>
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

        <ul>
          <li>
            <NavLink
              to={`${match.url}/cast`}
              className="nav"
              activeClassName="nav__active"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${match.url}/reviews`}
              className="nav"
              activeClassName="nav__active"
            >
              Reviews
            </NavLink>
          </li>
        </ul>

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
