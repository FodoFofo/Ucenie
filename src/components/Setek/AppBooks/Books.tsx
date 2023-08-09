// štýly
import "./Books.scss";

import React from "react";
import OrderButton from "./OrderButton";

type Props = {
  image: string;
  title: string;
};

const Books = (props: Props) => {
  return (
    <div className="one-book">
      <img src={props.image} alt="" />
      <h2 className="mainheading">{props.title}</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt nam
        ea consequuntur maiores consequatur necessitatibus dolores dolor placeat
        saepe! Dicta exercitationem dolorum voluptas! Accusantium, eum harum vel
        magni maxime pariatur?
      </p>
      <OrderButton />
    </div>
  );
};

export default Books;
