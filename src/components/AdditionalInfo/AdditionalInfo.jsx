import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  AdditionalInfoContainer,
  InfoList,
  InfoItem,
  Link,
} from './AdditionalInfo.styled';

const AdditionalInfo = ({ backLink }) => {
  return (
    <AdditionalInfoContainer>
      AdditionalInformatin
      <InfoList>
        <InfoItem>
          <Link to="cast" state={{ from: backLink }}>
            Cast
          </Link>
        </InfoItem>
        <InfoItem>
          <Link to="reviews" state={{ from: backLink }}>
            Reviews
          </Link>
        </InfoItem>
      </InfoList>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </AdditionalInfoContainer>
  );
};

export default AdditionalInfo;

AdditionalInfo.propTypes = {
  backLink: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string,
      sesarch: PropTypes.string,
    }).isRequired,
  ]),
};
