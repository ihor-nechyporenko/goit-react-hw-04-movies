import { Component } from 'react';

import defaultImg from './default-img.png';

class Cast extends Component {
  state = {};

  render() {
    const { cast } = this.props.credits;

    const IMG_URL = 'https://image.tmdb.org/t/p/original/';

    return (
      <>
        <h1>Cast</h1>

        <ul>
          {cast.map(({ id, character, name, profile_path }) => (
            <li key={id}>
              <img
                src={profile_path ? `${IMG_URL}${profile_path}` : defaultImg}
                alt={name}
                width="100"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
