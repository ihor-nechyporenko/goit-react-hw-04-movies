import { Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import NotFoundPage from './pages/NotFoundPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import routes from './routes';

import './common.css';

const App = () => (
  <>
    <AppBar />

    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route path={routes.movieDetails} component={MovieDetailsPage} />
      <Route path={routes.movies} component={MoviesPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default App;
