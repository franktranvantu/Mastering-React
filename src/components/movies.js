import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies()
  }

  renderMovieBody() {
    return (
      <tbody>
        {
          this.state.movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
            </tr>
          ))
        }
      </tbody>
    );
  }

  renderMovieTable() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {this.renderMovieBody()}
      </table>
    );
  }

  render() {
    return (
      <div>
        {this.renderMovieTable()}
      </div>
    );
  }
}

export default Movies;