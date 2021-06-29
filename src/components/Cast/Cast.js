import { Component } from 'react';

import defaultImg from './default-img.png';
import styles from './Cast.module.css';

class Cast extends Component {
  state = {};

  render() {
    const { cast } = this.props.credits;

    const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

    return (
      <ul className={styles.list}>
        {cast.map(({ id, character, name, profile_path }) => (
          <li className={styles.item} key={String(id)}>
            <img
              className={styles.item__img}
              src={profile_path ? `${IMG_URL}${profile_path}` : defaultImg}
              alt={name}
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.character}>Character:</p>
            <p className={styles.character}>{character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
