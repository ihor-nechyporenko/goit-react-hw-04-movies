import { Component } from 'react';

class Reviews extends Component {
  state = {};

  render() {
    const { results } = this.props.reviews;

    return (
      <>
        <h1>Reviews</h1>

        {results.length === 0 && (
          <h2>We don't have any reviews for this movie</h2>
        )}

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
