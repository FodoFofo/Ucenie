import { useState, useEffect } from "react";

// dáta
const urlKanye = "https://api.kanye.rest";
const urlISS = "http://api.open-notify.org/iss-now.json";

const AppApi = () => {
  const [quote, setQuote] = useState("Nahrávam");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [urlMap, setUrlMap] = useState("");

  const getQuote = async () => {
    const response = await fetch(urlKanye);
    const data = await response.json();
    setQuote(data["quote"]);
  };

  const getCoordinates = async () => {
    const response = await fetch(urlISS);
    const data = await response.json();
    console.log(data);
    setLatitude(data["iss_position"]["latitude"]);
    setLongitude(data["iss_position"]["longitude"]);
    setUrlMap(
      `https://sk.mapy.cz/zakladni?vlastni-body&x=${longitude}&y=${latitude}&z=7`
    );
  };

  useEffect(() => {
    getQuote();
    getCoordinates();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h3>Kanye West, citáty:</h3>
      <p>{quote}</p> <br />
      <h3>Pozícia ISS</h3>
      <h4>Zemepisná šírka</h4>
      <p>{latitude}</p>
      <h4>Zemepisná dĺžka</h4>
      <p>{longitude}</p>
      <a href={urlMap} target="_blank" rel="noreferrer">
        Pozícia ISS v mape
      </a>
    </div>
  );
};

export default AppApi;
