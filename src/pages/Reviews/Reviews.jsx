import { fetchMovieReviews } from 'helpers/fetchAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsList from 'components/ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsArr, setReviewsArr] = useState([]);

  useEffect(() => {
    const getReviewsArr = async movieId => {
      const data = await fetchMovieReviews(movieId);
      console.log(data);
      setReviewsArr(data);
    };
    getReviewsArr(movieId);
  }, [movieId]);

  console.log(reviewsArr);

  return reviewsArr.length > 0 && <ReviewsList reviewsArr={reviewsArr} />;
};

export default Reviews;
