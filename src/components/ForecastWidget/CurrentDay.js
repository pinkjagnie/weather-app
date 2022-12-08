import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

import winterImg from "../../assets/winter.jpg";
import mountainImg from "../../assets/mountain.jpg";
import springImg from "../../assets/spring.jpg";
import summerImg from "../../assets/summer.jpg";

import styles from "./currentDay.module.css";

const CurrentDay = ({forecast}) => {
  const weather_icon = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

  const imageOption = (temp) => {
    if (temp <=1) {
      return { backgroundImage: `url(${winterImg})` }
    } else if (temp > 1 && temp <=15) {
      return { backgroundImage: `url(${mountainImg})` }
    } else if (temp > 15 && temp <=20) {
      return { backgroundImage: `url(${springImg})` }
    } else if (temp > 20) {
      return { backgroundImage: `url(${summerImg})` }
    };
  };

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
        <div style={imageOption(forecast.main.temp)}></div>
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