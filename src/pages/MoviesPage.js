import { Component } from 'react';
import queryString from 'query-string';

import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import api from '../service/movies-api';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    movies: [],
  };

  componentDidMount() {
    const searchParam = queryString.parse(this.props.location.search).search;
    console.log(searchParam);

    if (searchParam) {
      this.onChangeQuery(searchParam);
      this.fetchMovies();
    }
  }

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

  fetchMovies() {
    const { searchQuery } = this.state;
    const { history, location } = this.props;

    api.fetchSearchingMovies(searchQuery).then(response => {
      this.setState({
        movies: response.data.results,
      });
    });

    history.push({
      pathname: location.pathname,
      search: `search=${searchQuery}`,
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>Movies Page</h1>
        <SearchBar onSubmit={this.onChangeQuery} />

        <MovieList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
