import React, { useState } from "react";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from "./searchBar.module.css";

const SearchBar = ({ submitSearch }) => {

  const [location, setLocation] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    if (!location || location === '') return;

    submitSearch(location);

    setLocation('');
  }

  return(
    <div className={styles.searchBarSection}>
      <form className={styles.searchBarForm} onSubmit={submitHandler}>
        <input type="text" placeholder="Search for location" required autoFocus className={styles.searchBarInput} value={location} onChange={event => setLocation(event.target.value)}/>
        <button className={styles.searchBarButton}><FontAwesomeIcon icon={faSearch} className={styles.searchBarIcon} /></button>
      </form>
    </div>
  )
};

export default SearchBar;

SearchBar.propTypes = {
  submitSearch: PropTypes.func.isRequired,
}