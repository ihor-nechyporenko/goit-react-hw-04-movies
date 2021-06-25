import { Component } from 'react';

class Cast extends Component {
  state = {};

  render() {
    const { cast } = this.props.credits;

    const IMG_URL = 'https://image.tmdb.org/t/p/original/';

    console.log(cast);

    return (
      <>
        <h1>Cast</h1>

        <ul>
          {cast.map(({ id, character, name, profile_path }) => (
            <li key={id}>
              <img src={`${IMG_URL}${profile_path}`} alt={name} width="100" />
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
