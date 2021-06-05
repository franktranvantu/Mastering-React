import React, {Component} from 'react';
import Like from "./common/like";
import TableHead from "./common/tableHead";

class MoviesTable extends Component {
  columns = [
    {path: 'title', label: 'Title'},
    {path: 'genre.name', label: 'Genre'},
    {path: 'numberInStock', label: 'Stock'},
    {path: 'dailyRentalRate', label: 'Rate'},
    {key: 'like', label: 'Like'},
    {key: 'action', label: 'Action'}
  ]

  render() {
    const {movies, sortColumn, onLike, onSort, onDelete} = this.props;
    return (
      <table className="table">
        <TableHead columns={this.columns} onSort={onSort} sortColumn={sortColumn} />
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