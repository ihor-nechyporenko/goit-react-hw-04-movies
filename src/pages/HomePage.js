import { Component } from 'react';
import axios from 'axios';

import MovieList from '../components/MovieList';

const API_KEY = '23ecc496bfc83d88818c3ec8956bc65d';
const BASE_URL = 'https://api.themoviedb.org/3/';

class HomePage extends Component {
  state = {
    trendingMovies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `${BASE_URL}trending/movie/week?api_key=${API_KEY}`,
    );

    this.setState({
      trendingMovies: response.data.results,
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
