import { fetchMovieCredits } from 'helpers/fetchAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CastList from 'components/CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [castArr, setCastArr] = useState([]);

  useEffect(() => {
    const getCastArr = async movieId => {
      const data = await fetchMovieCredits(movieId);
      setCastArr(data);
    };
    getCastArr(movieId);
  }, [movieId]);

  return castArr.length > 0 && <CastList castArr={castArr} />;
};

export default Cast;
