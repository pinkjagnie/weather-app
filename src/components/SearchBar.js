import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return(
    <div>
      <form>
        <input type="text" placeholder="Search for location" required autoFocus/>
        <button><FontAwesomeIcon icon={faSearch} /></button>
      </form>
    </div>
  )
};

export default SearchBar;