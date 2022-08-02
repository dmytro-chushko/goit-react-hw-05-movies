import { Notify } from 'notiflix';
import { fetchSearchMovies } from 'helpers/fetchAPI';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar';
import MovieList from 'components/MovieList';

const Movies = () => {
  const [moviesArr, setMoviesArr] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query');

  useEffect(() => {
    if (!query) return;

    const getMovieBySearchTerm = async query => {
      const data = await fetchSearchMovies(query);
      if (data.length === 0) {
        setMoviesArr([]);
        Notify.info('Sorry, We find nothing, try another auery');
        return;
      }
      setMoviesArr([...data]);
    };
    getMovieBySearchTerm(query);
  }, [query]);

  const handleSubmit = inputSearchTerm => {
    if (!inputSearchTerm) {
      Notify.info('Please, input search query');
      return;
    }
    if (inputSearchTerm === query) {
      Notify.info('You have already completed this search');
      return;
    }
    setSearchQuery({ query: inputSearchTerm });
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} query={query} />
      {moviesArr.length > 0 && <MovieList moviesArr={moviesArr} />}
    </>
  );
};

export default Movies;
