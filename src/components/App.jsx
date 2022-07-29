import { Routes, Route } from 'react-router-dom';
import SharedLayout from '../pages/SharedLayout';
import Home from '../pages/Home';
import Movies from 'pages/Movies/Movies';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movies/:filmId" element={<Film />} /> */}
      </Route>
    </Routes>
  );
};
