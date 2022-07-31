import { List } from './ReviewsList.styled';
import ReviewsItem from 'components/ReviewsItem';

const ReviewsList = ({ reviewsArr }) => {
  return (
    <List>
      {reviewsArr.map(({ author, content, id }) => (
        <ReviewsItem key={id} author={author} content={content} />
      ))}
    </List>
  );
};

export default ReviewsList;
