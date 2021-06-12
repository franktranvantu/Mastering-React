import http from './httpService';

const apiEndpoint = '/api/movies';

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(id) {
  return http.get(`${apiEndpoint}/${id}`);
}

export function saveMovie(movie) {
}

export function deleteMovie(id) {
  return http.delete(`${apiEndpoint}/${id}`);
}