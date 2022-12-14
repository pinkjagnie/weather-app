import React from "react";

import useForecast from "../hooks/useForecast";

import SearchBar from "./SearchBar";
import Loading from "./Loading";
import Error from "./Error";
import ForecastWidget from "./ForecastWidget/ForecastWidget";
import SearchAgain from "./SearchAgain";

import styles from "./homePage.module.css";

const HomePage = () => {
  const { isError, isLoading, forecast, submitRequest, searchAgain } = useForecast();

  const submitHandler = (value) => {
    submitRequest({value})
  };

  const searchAgainHandler = () => {
    searchAgain()
  };

  return(
    <div className={styles.homePageSection}>
      <div className={styles.homePageText}>
        <h1>Weather forecast app</h1>
        <h2>Don't be surprised! Check the weather before you leave the house</h2>
      </div>
      {!isLoading && !forecast && <SearchBar submitSearch={submitHandler}/>}
      {isLoading && <Loading />}
      {isError && <Error message={isError} />}
      {forecast && <ForecastWidget forecast={forecast} />}
      {forecast && <SearchAgain searchAgainHandler={searchAgainHandler}/>}
    </div>
  )
};

export default HomePage;