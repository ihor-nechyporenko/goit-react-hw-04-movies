import { NavLink } from 'react-router-dom';

const Navigation = ({ route1, route2 }) => (
  <nav>
    <ul>
      <li>
        <NavLink
          exact
          to={route1.link}
          className="nav"
          activeClassName="nav__active"
        >
          {route1.label}
        </NavLink>
      </li>
      <li>
        <NavLink to={route2.link} className="nav" activeClassName="nav__active">
          {route2.label}
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
