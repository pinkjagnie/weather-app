import { useState } from "react";

const useForecast = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  return {
    isError,
    isLoading,
    forecast
  }
};

export default useForecast;