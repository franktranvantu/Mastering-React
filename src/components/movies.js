import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import Like from "./common/like";
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate";
import ListGroup from "./common/listGroup";
import {getGenres} from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  }

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: getGenres()
    })
  }

  handleDelete = (id) => {
    this.setState({
      movies: this.state.movies.filter(movie => movie._id !== id)
    });
  }

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movie};
    movies[index].liked = !movies[index].liked;
    this.setState({movies});
  }

  handlePageChange = (page) => {
    this.setState({
      currentPage: page
    })
  }

  handleGenreSelect = (genre) => {
    console.log(genre);
  }

  render() {
    const {length: count} = this.state.movies;
    const {pageSize, currentPage, movies: allMovies} = this.state;
    const movies = paginate(allMovies, currentPage, pageSize);

    if (count === 0) {
      return (
        <div className="container pt-4">
          <p>There are no movies.</p>
        </div>
      );
    }
    return (
      <div className="container pt-4">
        <div className="row">
          <div className="col-2">
            <ListGroup items={this.state.genres} onItemSelect={this.handleGenreSelect} />
          </div>
          <div className="col">
            <p>Showing {count} movies</p>
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
                    <td><Like onClick={() => this.handleLike(movie)} liked={movie.liked} /></td>
                    <td><button onClick={() => this.handleDelete(movie._id)} className="btn btn-danger">Delete</button></td>
                  </tr>
                ))
              }
              </tbody>
            </table>
            <Pagination itemsCount={count} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange}  />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;