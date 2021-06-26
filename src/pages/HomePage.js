import { Component } from 'react';

import MovieList from '../components/MovieList';
import api from '../service/movies-api';

class HomePage extends Component {
  state = {
    trendingMovies: [],
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    api.fetchTrendingMovies().then(response => {
      this.setState({
        trendingMovies: response.data.results,
      });
    });
  }

  render() {
    const { trendingMovies } = this.state;

    return (
      <>
        <h1>Most trending movies this week</h1>

        <MovieList movies={trendingMovies} path={'movies'} />
      </>
    );
  }
}

export default HomePage;
