import React from 'react';
import styles from "../Card/Card.module.css"
interface WeatherData {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
}

interface Props {
  data: {
    list: WeatherData[];
  } | null | undefined;
}

const WeatherComponent: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data && data.list && (
        <div className={styles.card}>
          {data.list.map((d: WeatherData) => (
            <div key={d.dt_txt}>
              <div>
                <h2>Date: {d.dt_txt}</h2>
              </div>
              <br />
              <div>Temperature: {Math.round(d.main.temp - 273.15)}°C</div>
              <div>Weather: {d.weather[0].main}</div>
              <div>Description: {d.weather[0].description}</div>
              <div>Wind Speed: {d.wind.speed} M/S</div>
              <div>Cloud Coverage: {d.clouds.all}%</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default WeatherComponent;
