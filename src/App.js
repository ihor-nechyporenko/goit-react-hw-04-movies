import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar';
import NotFoundPage from './pages/NotFoundPage';
import Container from './components/Container';
import Loader from './components/Loader';
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
  <Container>
    <AppBar />

    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </Container>
);

export default App;
