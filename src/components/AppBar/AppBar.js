import Navigation from '../Navigation';
import routes from '../../routes';

const AppBar = () => (
  <header>
    <Navigation
      route1={{ link: routes.home, label: 'Home' }}
      route2={{ link: routes.movies, label: 'Movies' }}
    />
  </header>
);

export default AppBar;
