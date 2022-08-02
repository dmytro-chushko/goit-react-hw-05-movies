import PropTypes from 'prop-types';
import { ResultsList } from './MovieList.styled';
import MovieItem from 'components/MovieItem';

const MovieList = ({ moviesArr }) => {
  return (
    <ResultsList>
      {moviesArr.map(({ id, original_title }) => (
        <MovieItem key={id} title={original_title} id={id} />
      ))}
    </ResultsList>
  );
};

export default MovieList;

MovieList.propTypes = {
  moviesArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
