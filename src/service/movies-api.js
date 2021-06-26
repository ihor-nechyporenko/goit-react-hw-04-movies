import axios from 'axios';

const API_KEY = '23ecc496bfc83d88818c3ec8956bc65d';
const BASE_URL = 'https://api.themoviedb.org/3/';

const fetchTrendingMovies = () => {
  return axios.get(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`);
};

const fetchSearchingMovies = searchQuery => {
  return axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`,
  );
};

const fetchMovieDetails = movieId => {
  return axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&append_to_response=reviews,credits`,
  );
};

export default { fetchTrendingMovies, fetchSearchingMovies, fetchMovieDetails };
