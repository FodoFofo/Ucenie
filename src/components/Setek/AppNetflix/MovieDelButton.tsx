type Props = {
  deleteMovie: () => void;
};

const MovieDelButton = (props: Props) => {
  return (
    <button className="movie-del-button" onClick={props.deleteMovie}>
      Vymazať film
    </button>
  );
};

export default MovieDelButton;
