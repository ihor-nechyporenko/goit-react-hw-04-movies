import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = ({ route1, route2 }) => (
  <nav>
    <ul className={styles.nav__list}>
      <li>
        <NavLink
          exact
          to={route1.link}
          className={styles.nav}
          activeClassName={styles.nav__active}
        >
          {route1.label}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={route2.link}
          className={styles.nav}
          activeClassName={styles.nav__active}
        >
          {route2.label}
        </NavLink>
      </li>
    </ul>
    <div className={styles.line}></div>
  </nav>
);

export default Navigation;
