import React from 'react';
import Like from "./common/like";

const MoviesTable = (props) => {
  const {movies, onLike, onDelete} = props;

  return (
    <table className="table">
      <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Genre</th>
        <th scope="col">Stock</th>
        <th scope="col">Rate</th>
        <th scope="col">Like</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      {
        movies.map(movie => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td><Like onClick={() => onLike(movie)} liked={movie.liked} /></td>
            <td><button onClick={() => onDelete(movie._id)} className="btn btn-danger">Delete</button></td>
          </tr>
        ))
      }
      </tbody>
    </table>
  );
}

export default MoviesTable;