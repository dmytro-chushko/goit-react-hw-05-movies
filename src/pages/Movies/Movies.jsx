import Searchbar from 'components/Searchbar';

const Movies = () => {
  const handleSubmit = search => {
    console.log(`You submit: ${search}`);
  };

  return <Searchbar onSubmit={handleSubmit} />;
};

export default Movies;
