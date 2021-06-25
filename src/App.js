import { Route, NavLink, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import NotFoundPage from './pages/NotFoundPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

import './common.css';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink exact to="/" className="nav" activeClassName="nav__active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className="nav" activeClassName="nav__active">
          Movies
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default App;
