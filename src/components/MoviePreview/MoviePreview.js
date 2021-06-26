const MoviePreview = ({ title, poster_path }) => {
  let IMG_URL = 'https://image.tmdb.org/t/p/original/';

  if (!poster_path) {
    IMG_URL = '';
  }

  return (
    <div>
      <img src={`${IMG_URL}${poster_path}`} alt={title} width="100" />
      <p>{title}</p>
    </div>
  );
};

export default MoviePreview;
