import { fetchMovieReviews } from 'helpers/fetchAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsList from 'components/ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsArr, setReviewsArr] = useState([]);
  const [status, setStatus] = useState('resolved');

  useEffect(() => {
    const getReviewsArr = async movieId => {
      const data = await fetchMovieReviews(movieId);
      if (data.length === 0) {
        setStatus('rejected');
        return;
      }
      setReviewsArr(data);
      setStatus('resolved');
    };
    getReviewsArr(movieId);
  }, [movieId]);

  if (status === 'rejected') {
    return "We don't have any reviews for this movie";
  }

  if (status === 'resolved') {
    return <ReviewsList reviewsArr={reviewsArr} />;
  }
};

export default Reviews;
