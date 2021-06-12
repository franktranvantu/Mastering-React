import http from './httpService';

const apiEndpoint = '/api/movies';

export function getMovies() {
  return http.get(apiEndpoint);
}

export function deleteMovie(id) {
  return http.delete(`${apiEndpoint}/${id}`);
}