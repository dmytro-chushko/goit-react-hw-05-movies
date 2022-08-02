import PropTypes from 'prop-types';
import { Button } from './GoBackButton.styled';

const GoBackButton = ({ backLinkHref }) => {
  return <Button to={backLinkHref}>Go Back</Button>;
};

export default GoBackButton;

GoBackButton.propTypes = {
  backLinkHref: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string,
      sesarch: PropTypes.string,
    }).isRequired,
  ]),
};
