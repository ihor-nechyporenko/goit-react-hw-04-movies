import { Component } from 'react';
import queryString from 'query-string';

import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import Loader from '../components/Loader';
import Error from '../components/Error';
import api from '../service/movies-api';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    movies: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const searchParam = queryString.parse(this.props.location.search).search;

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
      error: null,
    });
  };

  fetchMovies() {
    const { searchQuery } = this.state;
    const { history, location } = this.props;

    this.setState({ isLoading: true });

    api
      .fetchSearchingMovies(searchQuery)
      .then(response => {
        this.setState({
          movies: response.data.results,
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));

    history.push({
      pathname: location.pathname,
      search: `search=${searchQuery}`,
    });
  }

  render() {
    const { movies, isLoading, error } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery} />
        <MovieList movies={movies} />
        {isLoading && <Loader />}
        {error && <Error />}
      </>
    );
  }
}

export default MoviesPage;
