import axios from 'axios';
import { Notify } from 'notiflix';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '3aee21951118aea271842c595cb04969';

export const fetchMovieOnTrend = async () => {
  try {
    const data = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${KEY}`
    );
    return data.data.results;
  } catch (error) {
    Notify.failure(error.message);
  }
};

export const fetchSearchMovies = async searchTerm => {
  try {
    const data = await axios.get(
      `${BASE_URL}/search/movie?api_key=${KEY}&query=${searchTerm}`
    );
    return data.data.results;
  } catch (error) {
    Notify.failure(error.message);
  }
};

export const fetchMovieDetails = async id => {
  try {
    const data = await axios.get(`${BASE_URL}/movie/${id}?api_key=${KEY}`);
    return data.data;
  } catch (error) {
    Notify.failure(error.message);
  }
};

export const fetchMovieCredits = async id => {
  try {
    const data = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${KEY}`
    );
    return data.data.cast;
  } catch (error) {
    Notify.failure(error.message);
  }
};

export const fetchMovieReviews = async id => {
  try {
    const data = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`
    );
    return data.data.results;
  } catch (error) {
    Notify.failure(error.message);
  }
};
