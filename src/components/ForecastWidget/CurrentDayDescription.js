import React from "react";

import styles from "./currentDayDescription.module.css";

const CurrentDayDescription = ({forecast}) => {
  return(
    <div className={styles.currentDayDescriptionSection}>
      <div className={styles.descriptionBox}>
        <div className={styles.descriptionItem}>
          <p className={styles.descriptionTitle}>Temperature</p>
          <p className={styles.descriptionValue}><span>{Math.round(forecast.main.temp)}</span> °C</p>
        </div>
        <div className={styles.descriptionItem}>
          <p className={styles.descriptionTitle}>Feels like</p>
          <p className={styles.descriptionValue}><span>{Math.round(forecast.main.feels_like)}</span> °C</p>
        </div>
        <div className={styles.descriptionItem}>
          <p className={styles.descriptionTitle}>Minimum temperature</p>
          <p className={styles.descriptionValue}><span>{Math.round(forecast.main.temp_min)}</span> °C</p>
        </div>
        <div className={styles.descriptionItem}>
          <p className={styles.descriptionTitle}>Maximum temperature</p>
          <p className={styles.descriptionValue}><span>{Math.round(forecast.main.temp_max)}</span> °C</p>
        </div>
        <div className={styles.descriptionItem}>
          <p className={styles.descriptionTitle}>Humidity</p>
          <p className={styles.descriptionValue}><span>{forecast.main.humidity}</span> %</p>
        </div>
        <div className={styles.descriptionItem}>
          <p className={styles.descriptionTitle}>Pressure</p>
          <p className={styles.descriptionValue}><span>{forecast.main.pressure}</span> hPa</p>
        </div>
        <div className={styles.descriptionItem}>
          <p className={styles.descriptionTitle}>Wind</p>
          <p className={styles.descriptionValue}><span>{forecast.wind.speed}</span> m/sec</p>
        </div>
        <div className={styles.descriptionItem}>
          <p className={styles.descriptionTitle}>Cloudiness</p>
          <p className={styles.descriptionValue}><span>{forecast.clouds.all}</span> %</p>
        </div>
      </div>
    </div>
  )
};

export default CurrentDayDescription;