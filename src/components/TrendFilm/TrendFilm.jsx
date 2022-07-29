import { TrendListItem, Link } from './TrendFilm.styled';

const TrendFilm = ({ id, title }) => {
  return (
    <TrendListItem>
      <Link to={`${id}`}>{title}</Link>
    </TrendListItem>
  );
};

export default TrendFilm;
