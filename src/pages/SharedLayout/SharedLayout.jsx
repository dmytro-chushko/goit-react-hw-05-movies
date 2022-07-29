import { Outlet } from 'react-router-dom';
import { Container, Navigation, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Navigation>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
