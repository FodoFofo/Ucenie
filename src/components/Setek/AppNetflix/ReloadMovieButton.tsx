type Props = {
  reloadMovies: () => void;
};

const ReloadMovieButton = (props: Props) => {
  return (
    <button className="main-reload-button" onClick={props.reloadMovies}>
      Obnoviť všetko
    </button>
  );
};

export default ReloadMovieButton;
