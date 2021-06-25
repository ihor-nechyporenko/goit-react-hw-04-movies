import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

    console.log(response.data.results);
  }

  render() {
    const { trendingMovies } = this.state;

    return (
      <>
        <h1>Most trending movies this week</h1>
        <ul>
          {trendingMovies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
