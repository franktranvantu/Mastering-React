import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies()
  }

  handleDelete = (id) => {
    this.setState({
      movies: this.state.movies.filter(movie => movie._id !== id)
    });
  }

  render() {
    const {length: count} = this.state.movies;
    if (count === 0) {
      return (
        <div className="container pt-4">
          <p>There are no movies.</p>
        </div>
      );
    }
    return (
      <div className="container pt-4">
        <p>Showing {count} movies.</p>
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
          <tbody>
          {
            this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><button onClick={() => this.handleDelete(movie._id)} className="btn btn-danger">Delete</button></td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;