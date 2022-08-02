import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { ResultsItem, Link } from './MovieItem.styled';

const MovieItem = ({ id, title }) => {
  const location = useLocation();
  return (
    <ResultsItem>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </ResultsItem>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
