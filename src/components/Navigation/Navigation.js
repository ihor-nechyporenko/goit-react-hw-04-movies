import { NavLink } from 'react-router-dom';

import routes from '../../routes';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          exact
          to={routes.home}
          className="nav"
          activeClassName="nav__active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.movies}
          className="nav"
          activeClassName="nav__active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
