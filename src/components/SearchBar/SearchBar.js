import { Component } from 'react';
import { withRouter } from 'react-router-dom';

import styles from './SearchBar.module.css';

class SearchBar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({
      query: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <button className={styles.button} type="submit">
            <span>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </>
    );
  }
}

export default withRouter(SearchBar);
