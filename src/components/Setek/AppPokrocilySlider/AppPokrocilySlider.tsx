import React from "react";
import OneMovieSlider from "./components/OneMovieSlider";

// štýly
import './AppPokrocilySlider.scss'

const AppPokrocilySlider = () => {
  return (
    <div className="slider">
      <OneMovieSlider />
    </div>
  );
};

export default AppPokrocilySlider;
