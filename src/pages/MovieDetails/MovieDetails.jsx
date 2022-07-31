import { fetchMovieDetails } from 'helpers/fetchAPI';
import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  DetailsContainer,
  DescriptionContainer,
  AdditionalInformatin,
  MoviePoster,
  MovieTitle,
  OverviewLabel,
  GenresLabel,
  Text,
  InfoList,
  InfoItem,
  Link,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieObj, setMovieObj] = useState({});

  useEffect(() => {
    const getMovieDetails = async movieId => {
      const data = await fetchMovieDetails(movieId);
      setMovieObj(data);
    };
    getMovieDetails(movieId);
  }, [movieId]);

  const {
    poster_path,
    original_title,
    vote_average,
    overview,
    genres,
    release_date,
  } = movieObj;
  const imgUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;

  return (
    <>
      {Object.keys(movieObj).length > 0 && (
        <>
          <DetailsContainer>
            <MoviePoster src={imgUrl} alt={original_title} />
            <DescriptionContainer>
              <MovieTitle>
                {original_title} ({release_date.slice(0, 4)})
              </MovieTitle>
              <Text>User Score: {Math.floor(vote_average * 10)}%</Text>
              <OverviewLabel>Overview</OverviewLabel>
              <Text>{overview}</Text>
              <GenresLabel>Genres</GenresLabel>
              <Text>{genres.map(genre => genre.name).join(' ')}</Text>
            </DescriptionContainer>
          </DetailsContainer>
          <AdditionalInformatin>
            AdditionalInformatin
            <InfoList>
              <InfoItem>
                <Link to="cast">Cast</Link>
              </InfoItem>
              <InfoItem>
                <Link to="reviews">Reviews</Link>
              </InfoItem>
            </InfoList>
            <Outlet />
          </AdditionalInformatin>
        </>
      )}
    </>
  );
};

export default MovieDetails;