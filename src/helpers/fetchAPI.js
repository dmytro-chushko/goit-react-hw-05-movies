import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '3aee21951118aea271842c595cb04969';

export const fetchFilmsOnTrend = async () => {
  const data = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
  return data.data.results;
};
