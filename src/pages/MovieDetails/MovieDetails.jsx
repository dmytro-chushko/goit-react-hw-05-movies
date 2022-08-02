import { fetchMovieDetails } from 'helpers/fetchAPI';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import GoBackButton from 'components/GoBackButton';
import Details from 'components/Details';
import AdditionalInfo from 'components/AdditionalInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieObj, setMovieObj] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getMovieDetails = async movieId => {
      const data = await fetchMovieDetails(movieId);
      setMovieObj(data);
    };
    getMovieDetails(movieId);
  }, [movieId]);

  return (
    Object.keys(movieObj).length > 0 && (
      <>
        <GoBackButton backLinkHref={backLinkHref} />
        <Details movieObj={movieObj} />
        <AdditionalInfo backLink={backLinkHref} />
      </>
    )
  );
};

export default MovieDetails;
