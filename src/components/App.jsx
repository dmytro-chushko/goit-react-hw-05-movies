import { Routes, Route } from 'react-router-dom';
import SharedLayout from '../pages/SharedLayout';
import Home from '../pages/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
