import { Component } from 'react';

import styles from './Reviews.module.css';

class Reviews extends Component {
  state = {};

  render() {
    const { results } = this.props.reviews;

    return (
      <>
        {results.length === 0 && (
          <h2>We don't have any reviews for this movie</h2>
        )}

        <ul className={styles.list}>
          {results.map(result => (
            <li className={styles.item} key={result.id}>
              <p className={styles.author}>
                Author: {result.author_details.username}
              </p>
              <p className={styles.review}>{result.content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Reviews;
