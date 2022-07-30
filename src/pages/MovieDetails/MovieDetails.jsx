import { fetchMovieDetails } from 'helpers/fetchAPI';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieObj, setMovieObj] = useState({});

  useEffect(() => {
    const getMovieDetails = async movieId => {
      const data = await fetchMovieDetails(movieId);
      setMovieObj(data);
      console.log(data);
    };
    getMovieDetails(movieId);
  }, [movieId]);

  const { poster_path, original_title, popularity, overview, genres } =
    movieObj;
  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <>
      {Object.keys(movieObj).length > 0 && (
        <div>
          <img src={imgUrl} alt={original_title} />
          <div>
            <h1>{original_title}</h1>
            <p>User Score: {Math.floor(popularity)}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genres.map(genre => genre.name).join(' ')}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
