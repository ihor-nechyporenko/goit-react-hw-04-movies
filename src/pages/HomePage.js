import { Component } from 'react';

import MovieList from '../components/MovieList';
import api from '../service/movies-api';

import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {
    trendingMovies: [],
  };

  componentDidMount() {
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
        <h1 className={styles.title}>Most trending movies at this week</h1>

        <MovieList movies={trendingMovies} path={'movies'} />
      </>
    );
  }
}

export default HomePage;
