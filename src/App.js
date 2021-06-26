import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import AppBar from './components/AppBar';
import NotFoundPage from './pages/NotFoundPage';
import routes from './routes';

import './common.css';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);

const App = () => (
  <>
    <AppBar />

    <Suspense
      fallback={
        <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
      }
    >
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
