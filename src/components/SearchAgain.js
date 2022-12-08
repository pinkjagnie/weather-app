import React from "react";

import styles from "./searchAgain.module.css";

const SearchAgain = ({searchAgainHandler}) => {

  const searchAgain = () => {
    searchAgainHandler()
  };

  return(
    <div className={styles.searchAgainSection}>
      <p>Wanna know more?</p>
      <button onClick={searchAgain}>Search again</button>
    </div>
  )
};

export default SearchAgain;