import { useState } from "react";

// dáta
import data from "../../AppNetflix2/data";

// ikony
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

// štýly
import './OneMovieSlider.scss'

const OneMovieSlider = () => {
  const [index, setIndex] = useState(0);
  const { image, title, description } = data[index];

  const checkMovieNumber = (movieIndex: number) => {
    if (movieIndex < 0) return data.length - 1;
    else if (movieIndex > data.length - 1) return 0;
    else return movieIndex;
  };

  const nextMovie = () => {
    setIndex((index: number) => {
      const newIndex = index + 1;
      return checkMovieNumber(newIndex);
    });
  };

  const previousMovie = () => {
    setIndex((index: number) => {
      const newIndex = index - 1;
      return checkMovieNumber(newIndex);
    });
  };

  return (
    <div className="one-movie">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={previousMovie}><FaArrowAltCircleLeft/></button>
      <button onClick={nextMovie}><FaArrowAltCircleRight/></button>
    </div>
  );
};

export default OneMovieSlider;
