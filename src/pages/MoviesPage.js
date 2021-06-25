import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import SearchBar from '../components/SearchBar';

const API_KEY = '23ecc496bfc83d88818c3ec8956bc65d';
const BASE_URL = 'https://api.themoviedb.org/3/';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    movies: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      movies: [],
    });
  };

  async fetchMovies() {
    const { searchQuery } = this.state;

    const result = await axios
      .get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`)
      .then(response => response.data.results);

    this.setState({
      movies: result,
    });

    console.log(result);
    console.log(searchQuery);
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>Movies Page</h1>
        <SearchBar onSubmit={this.onChangeQuery} />

        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${this.props.match.url}/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
