import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const api_key = 'cd0301e8d36e75459e8f6b3abbc4f987';

const api = axios.create({ baseURL: URL, params: { api_key } });

export async function fetchMovies() {
  const response = await api.get('/trending/movie/day');
  return response.data.results;
}

export async function fetchMovieById(id) {
  const response = await api.get(`/movie/${id}`);
  return response.data;
}

export async function findMovies(query) {
  const response = await api.get(`/search/movie?&query=${query}`);
  return response.data;
}

export async function getReviews(id) {
  const response = await api.get(`/movie/${id}/reviews`);
  return response.data;
}

export async function getCast(id) {
  const response = await api.get(`/movie/${id}/credits`);
  return response.data;
}
