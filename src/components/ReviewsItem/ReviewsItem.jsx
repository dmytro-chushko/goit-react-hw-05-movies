import { Item, Text } from './ReviewsItem.styled';

const ReviewsItem = ({ author, content }) => {
  return (
    <Item>
      <Text>Author: {author}</Text>
      <Text>{content}</Text>
    </Item>
  );
};

export default ReviewsItem;
