import React from "react";

import CurrentDay from "./CurrentDay";
import CurrentDayDescription from "./CurrentDayDescription";

import styles from "./forecastWidget.module.css";

const ForecastWidget = ({forecast}) => {
  return(
    <div className={styles.forecastWidgetSection}>
      <CurrentDay forecast={forecast}/>
      <div className={styles.forecastWidgetMore}>
        <CurrentDayDescription forecast={forecast}/>
      </div>
    </div>
  )
};

export default ForecastWidget;