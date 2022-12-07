import { useState } from "react";

const useForecast = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const submitRequest = (location) => {
    console.log({location});
  }

  return {
    isError,
    isLoading,
    forecast,
    submitRequest
  }
};

export default useForecast;