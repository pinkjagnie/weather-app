import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from "./searchBar.module.css";

const SearchBar = () => {
  return(
    <div className={styles.searchBarSection}>
      <form className={styles.searchBarForm}>
        <input type="text" placeholder="Search for location" required autoFocus className={styles.searchBarInput}/>
        <button className={styles.searchBarButton}><FontAwesomeIcon icon={faSearch} className={styles.searchBarIcon} /></button>
      </form>
    </div>
  )
};

export default SearchBar;