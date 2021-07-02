import { Component } from 'react';

import MovieList from '../components/MovieList';
import Loader from '../components/Loader';
import Error from '../components/Error';
import api from '../service/movies-api';

import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {
    trendingMovies: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchTrendingMovies();
  }

  fetchTrendingMovies = () => {
    this.setState({ isLoading: true });

    api
      .fetchTrendingMovies()
      .then(response => {
        this.setState({
          trendingMovies: [...response.data.results],
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { trendingMovies, isLoading, error } = this.state;

    return (
      <>
        <h1 className={styles.title}>Most trending movies at this week</h1>

        <MovieList movies={trendingMovies} path={'movies'} />
        {isLoading && <Loader />}
        {error && <Error />}
      </>
    );
  }
}

export default HomePage;
