import { useState } from "react";

const API_KEY = 'e528b2737da0d462f48c34b26a6ad5fa';

const useForecast = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  async function submitRequest(value) {
    setIsLoading(true);
    setIsError(false);

    const city = value.value;
    console.log(city);

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
    try {
      const response = await fetch(url)
      const res = await response.json()
      console.log(res);

      setForecast(res);

      if (!res.ok) {
        setIsError(`Ups! ` + res.message + `. Please try again`)
      }

      if (!res || res.length === 0) {
        console.log('error');
        setIsError('Sorry! There is no such location')
        return
      }
    } catch(err) {
      console.log(err);
      setIsError('Ups! Something went wrong. Please, try again')
    };

    setIsLoading(false);
  }



  return {
    isError,
    isLoading,
    forecast,
    submitRequest
  }
};

export default useForecast;