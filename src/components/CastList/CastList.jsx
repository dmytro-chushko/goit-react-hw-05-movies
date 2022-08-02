import PropTypes from 'prop-types';
import { List } from './CastList.styled';
import CastItem from 'components/CastItem';

const CastList = ({ castArr }) => {
  return (
    <List>
      {castArr.map(({ profile_path, name, character, id }) => (
        <CastItem key={id} photo={profile_path} name={name} char={character} />
      ))}
    </List>
  );
};

export default CastList;

CastList.propTypes = {
  castArr: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
