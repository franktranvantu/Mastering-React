import http from './httpService';

const apiEndpoint = '/api/auth';

export function login(email, password) {
  return http.post(apiEndpoint, {email, password});
}