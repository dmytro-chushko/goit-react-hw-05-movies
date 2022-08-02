import PropTypes from 'prop-types';
import {
  DetailsContainer,
  DescriptionContainer,
  MoviePoster,
  MovieTitle,
  OverviewLabel,
  GenresLabel,
  Text,
} from './Details.styled';

const Details = ({ movieObj }) => {
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
  );
};

export default Details;

Details.propTypes = {
  movieObj: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};
