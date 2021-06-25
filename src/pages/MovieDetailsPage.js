import { Component } from 'react';
import axios from 'axios';

const API_KEY = '23ecc496bfc83d88818c3ec8956bc65d';
const BASE_URL = 'https://api.themoviedb.org/3/';

class MovieDetailsPage extends Component {
  state = {
    title: null,
    overview: null,
    genres: [],
    poster_path: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const result = await axios
      .get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`)
      .then(response => response.data);

    this.setState({ ...result });

    console.log(result.genres);
  }

  render() {
    const { title, overview, genres, poster_path } = this.state;
    const IMG_URL = 'https://image.tmdb.org/t/p/original/';

    return (
      <>
        <h1>Movie details {this.props.match.params.movieId}</h1>

        <img src={`${IMG_URL}${poster_path}`} alt={title} width="200" />
        <h2>{title}</h2>
        <p>{overview}</p>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default MovieDetailsPage;
