import { Title, TrendList } from './Home.styled';
import TrendFilm from 'components/TrendFilm';
import { fetchFilmsOnTrend } from '../../helpers/fetchAPI';
import { useState, useEffect } from 'react';

const Home = () => {
  const [dataTrend, setDataTrend] = useState([]);

  useEffect(() => {
    const runFetch = async () => {
      const data = await fetchFilmsOnTrend();
      setDataTrend(data);
    };
    runFetch();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <TrendList>
        {dataTrend &&
          dataTrend.map(({ id, original_title }) => (
            <TrendFilm key={id} title={original_title} id={id} />
          ))}
      </TrendList>
    </>
  );
};

export default Home;
