import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '3aee21951118aea271842c595cb04969';

export const fetchMovieOnTrend = async () => {
  const data = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
  return data.data.results;
};

export const fetchSearchMovies = async searchTerm => {
  const data = await axios.get(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${searchTerm}`
  );
  return data.data.results;
};

export const fetchMovieDetails = async id => {
  const data = await axios.get(`${BASE_URL}/movie/${id}?api_key=${KEY}`);
  return data.data;
};

export const fetchMovieCredits = async id => {
  const data = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${KEY}`
  );
  return data.data.cast;
};

export const fetchMovieReviews = async id => {
  const data = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`
  );
  return data.data.results;
};
