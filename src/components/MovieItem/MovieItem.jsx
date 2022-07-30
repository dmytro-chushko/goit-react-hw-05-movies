import { ResultsItem, Link } from './MovieItem.styled';

const MovieItem = ({ id, title }) => {
  return (
    <ResultsItem>
      <Link to={`/movies/${id}`}>{title}</Link>
    </ResultsItem>
  );
};

export default MovieItem;
