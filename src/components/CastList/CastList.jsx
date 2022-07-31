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
