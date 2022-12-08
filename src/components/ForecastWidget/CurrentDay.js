import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

import mountainImg from "../../assets/mountain.jpg";

import styles from "./currentDay.module.css";

const CurrentDay = ({forecast}) => {
  const weather_icon = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

  const dayBuilder = (d) => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];

    return `${day}`
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${date} ${month} ${year}`
  };

  return(
    <div className={styles.currentDaySection}>
      <div className={styles.currentDayImage}>
        <img src={mountainImg} alt="mountain" />
      </div>
      <div className={styles.currentDayInfo}>
        <div className={styles.currentDayInfoMain}>
          <h2>{dayBuilder(new Date())}</h2>
          <p>{dateBuilder(new Date())}</p>
          <div className={styles.currentDayLocation}>
            <FontAwesomeIcon icon={faLocationPin} />
            <span>{forecast.name}, {forecast.sys.country}</span>
          </div>
        </div>
        <div className={styles.currentDayInfoBottom}>
          <img width="45" src={weather_icon} alt="" />
          <h2>
            <span>{Math.round(forecast.main.temp)}</span>°C
          </h2>
          <h5>{forecast.weather[0].main}</h5>
          <h6>({forecast.weather[0].description})</h6>
        </div>
      </div>
    </div>
  )
};

export default CurrentDay;