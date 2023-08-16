import { useState, useEffect } from "react";

// dáta
const urlISS = "http://api.open-notify.org/iss-now.json";

const AppMultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  useEffect(() => {
    // promise
    fetch(urlISS)
      .then((response) => response.json())
      .then((data) => data["iss_position"])
      .then((position) => {
        setLongitude(position["longitude"]);
        setLatitude(position["latitude"]);
      });
    setLoading(false);
  }, []);

  if (loading) {
    return <h2>Načítanie stránky</h2>;
  }

  return (
    <div>
      <h2>Pozícia ISS</h2>
      <p>
        long.:{longitude}; lat.:{latitude}
      </p>
    </div>
  );
};

export default AppMultipleReturns;
