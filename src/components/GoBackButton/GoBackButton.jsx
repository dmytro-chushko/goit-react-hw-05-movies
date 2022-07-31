import { Button } from './GoBackButton.styled';

const GoBackButton = ({ backLinkHref }) => {
  return <Button to={backLinkHref}>Go Back</Button>;
};

export default GoBackButton;
