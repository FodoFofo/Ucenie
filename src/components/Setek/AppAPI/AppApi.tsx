import { useState, useEffect } from "react";

const AppApi = () => {
  const [quote, setQuote] = useState('Nahrávam')
  
    const url = "https://api.kanye.rest";

  const getQuote = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setQuote(data['quote'])
  };

  useEffect( () => {
      getQuote();

  }, [])

  return <div>{quote}</div>;
};

export default AppApi;
