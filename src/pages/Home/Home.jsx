import { Title } from './Home.styled';
import MovieList from 'components/MovieList';
import { fetchMovieOnTrend } from '../../helpers/fetchAPI';
import { useState, useEffect } from 'react';

const Home = () => {
  const [dataTrend, setDataTrend] = useState([]);

  useEffect(() => {
    const runFetch = async () => {
      const data = await fetchMovieOnTrend();
      setDataTrend(data);
    };
    runFetch();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <MovieList moviesArr={dataTrend} />
    </>
  );
};

export default Home;
