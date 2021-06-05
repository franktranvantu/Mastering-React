import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate";
import ListGroup from "./common/listGroup";
import {getGenres} from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null
  }

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: [{_id: '', name: 'All Genres'}, ...getGenres()]
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

  handleSort = (header) => {

  }

  handlePageChange = (page) => {
    this.setState({
      currentPage: page
    })
  }

  handleGenreSelect = (genre) => {
    this.setState({
      selectedGenre: genre,
      currentPage: 1
    })
  }

  render() {
    const {pageSize, currentPage, movies: allMovies} = this.state;
    const {genres, selectedGenre} = this.state;
    const filteredMovies = selectedGenre && selectedGenre._id ? allMovies.filter(movie => movie.genre._id === selectedGenre._id) : allMovies;
    const movies = paginate(filteredMovies, currentPage, pageSize);
    const {length: count} = filteredMovies;

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
            <ListGroup items={genres} selectedItem={selectedGenre} onItemSelect={this.handleGenreSelect} />
          </div>
          <div className="col">
            <p>Showing {count} movies</p>
            <MoviesTable movies={movies} onLike={this.handleLike} onSort={this.handleSort} onDelete={this.handleDelete} />
            <Pagination itemsCount={count} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange}  />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;