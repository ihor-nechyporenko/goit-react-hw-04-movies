import { Component } from 'react';

class Reviews extends Component {
  state = {};

  render() {
    const { results } = this.props.reviews;

    console.log(results);

    return (
      <>
        <h1>Reviews</h1>

        <ul>
          {results.map(result => (
            <li key={result.id}>
              <p>Author: {result.author_details.username}</p>
              <p>{result.content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Reviews;
