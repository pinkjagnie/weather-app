import React from "react";

import SearchBar from "./SearchBar";

import styles from "./homePage.module.css";

const HomePage = () => {
  return(
    <div className={styles.homePageSection}>
      <div className={styles.homePageText}>
        <h1>Weather forecast app</h1>
        <h2>Don't be surprised! Check the weather before you leave the house</h2>
      </div>
      <SearchBar />
    </div>
  )
};

export default HomePage;