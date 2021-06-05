import React, {Component} from 'react';
import Like from "./common/like";

class MoviesTable extends Component {
  handleSort = (path) => {
    const sortColumn = {...this.props.sortColumn};
    if (sortColumn.path === path) {
      sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.props.onSort(sortColumn);
  }
  render() {
    const {movies, onLike, onDelete} = this.props;
    return (
      <table className="table">
        <thead>
        <tr>
          <th onClick={() => this.handleSort('title')} scope="col">Title</th>
          <th onClick={() => this.handleSort('genre.name')} scope="col">Genre</th>
          <th onClick={() => this.handleSort('numberInStock')} scope="col">Stock</th>
          <th onClick={() => this.handleSort('dailyRentalRate')} scope="col">Rate</th>
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
              <td><Like onClick={() => onLike(movie)} liked={movie.liked}/></td>
              <td>
                <button onClick={() => onDelete(movie._id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    );
  };
}

export default MoviesTable;