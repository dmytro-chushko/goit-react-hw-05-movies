import { Item, Photo, Text } from './CastItem.styled';

const CastItem = ({ photo, name, char }) => {
  const photoURL = `https://image.tmdb.org/t/p/w300${photo}`;
  return (
    <Item>
      {photo && <Photo src={photoURL} alt={name} />}
      <Text>{name}</Text>
      <Text>Character: {char}</Text>
    </Item>
  );
};

export default CastItem;
