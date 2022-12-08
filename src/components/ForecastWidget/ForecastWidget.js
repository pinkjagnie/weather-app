import React from "react";

import CurrentDay from "./CurrentDay";
import CurrentDayDescription from "./CurrentDayDescription";
import UpcomingDays from "./UpcomingDays";

import styles from "./forecastWidget.module.css";

const ForecastWidget = () => {
  return(
    <div>
      <CurrentDay />
      <div>
        <CurrentDayDescription />
        <UpcomingDays />
      </div>
    </div>
  )
};

export default ForecastWidget;