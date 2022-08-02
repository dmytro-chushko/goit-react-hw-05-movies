import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Navigation, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Navigation>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
