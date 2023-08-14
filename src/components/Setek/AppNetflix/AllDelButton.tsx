type Props = {
    delAllMovies: () => void
}

const AllDelButton = (props: Props) => {
  return (
    <button className="main-delete-button" onClick={props.delAllMovies}>
      Vymazať všetky filmy
    </button>
  );
};

export default AllDelButton;
