import React, {Component} from 'react';
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

class MoviesTable extends Component {
  columns = [
    {path: 'title', label: 'Title'},
    {path: 'genre.name', label: 'Genre'},
    {path: 'numberInStock', label: 'Stock'},
    {path: 'dailyRentalRate', label: 'Rate'},
    {key: 'like', label: 'Like', content: movie => <Like onClick={() => this.props.onLike(movie)} liked={movie.liked}/>},
    {key: 'action', label: 'Action', content: movie => <button onClick={() => this.props.onDelete(movie._id)} className="btn btn-danger">Delete</button>}
  ]

  render() {
    const {movies, sortColumn, onLike, onSort, onDelete} = this.props;
    return (
      <table className="table">
        <TableHeader columns={this.columns} onSort={onSort} sortColumn={sortColumn} />
        <TableBody columns={this.columns} data={movies} onLike={onLike} onDelete={onDelete} />
      </table>
    );
  }
}

export default MoviesTable;