import React from 'react';
import PropTypes from 'prop-types';

import styles from './error.module.css';

const Error = ({ message }) => {
  return(
    <div className={styles.errorSection}>
      <p>{message}</p>
    </div>
  )
};

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: 'An error occurred',
};

export default Error;