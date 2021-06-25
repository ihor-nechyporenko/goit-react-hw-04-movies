const MoviePreview = ({ title, poster_path }) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/original/';

  return (
    <div>
      <img src={`${IMG_URL}${poster_path}`} alt={title} width="100" />
      <p>{title}</p>
    </div>
  );
};

export default MoviePreview;
