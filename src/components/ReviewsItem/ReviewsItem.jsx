import PropTypes from 'prop-types';
import { Item, Text, Span } from './ReviewsItem.styled';

const ReviewsItem = ({ author, content }) => {
  return (
    <Item>
      <Text>
        <Span>Author:</Span> {author}
      </Text>
      <Text>{content}</Text>
    </Item>
  );
};

export default ReviewsItem;

ReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
