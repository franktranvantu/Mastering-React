import http from './httpService';

const apiEndpoint = '/api/auth';

export function login(username, password) {
  return http.post(apiEndpoint, {username, password});
}