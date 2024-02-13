import axios from 'axios';
import styles from "../Card/Card.module.css"
import { useState } from 'react'
import Image from 'next/image';
import WeatherComponent from '../Weather';

export default function Card() {
  const [data, setData] = useState();
  const apiKey = "b28d6de7b093136e0f01082d3a1e7257";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${apiKey}`;
  const GrabWeather = () => {
    axios.get(url)
      .then((response) => {
        console.clear();
        setData(response.data);
        console.log(response.data);
      }).catch(err => {
        console.log(err);
      })
  }

  return (
    <>

      <main>
        <div className={styles.container}>
          <h1>5-Day Weather Forecast in London, England after Feb 12th</h1>
          <br></br>
          <button className={styles.button} onClick={() => GrabWeather()}>Show More</button>
          <br></br>
          <div className={styles.subcontainer}>
            <div className={styles.day}>
              <h2>Feb 13th</h2>
              <Image
                src="/SVG/Asset 4.svg"
                width={150}
                height={150}
                alt="rain"
              />
              <p>Cloudy in the morning</p>
              <Image
                src="/SVG/Asset 2.svg"
                width={150}
                height={150}
                alt="cloud"

              />
              <p>Rainy in the afternoon/evening</p>


            </div>
            <div className={styles.day}>
              <h2>Feb 14th</h2>
              <Image
                src="/SVG/Asset 4.svg"
                width={150}
                height={150}
                alt="rain"
              />
              <Image
                src="/SVG/Asset 2.svg"
                width={150}
                height={150}
                alt="cloud"

              />
              <p>Mix of Overcast and Light/Moderate Rain</p>


            </div>
            <div className={styles.day}>
              <h2>Feb 15th</h2>
              <Image
                src="/SVG/Asset 4.svg"
                width={150}
                height={150}
                alt="rain"
              />
              <p>Overcast Clouds most of the day</p>
              <Image
                src="/SVG/Asset 2.svg"
                width={150}
                height={150}
                alt="cloud"

              />
              <p>Rainy in the afternoon/evening</p>


            </div>
            <div className={styles.day}>
              <h2>Feb 16th</h2>
              <Image
                src="/SVG/Asset 4.svg"
                width={150}
                height={150}
                alt="rain"
              />
              <p>Cloudy in the morning</p>
              <Image
                src="/SVG/Asset 1.svg"
                width={150}
                height={150}
                alt="cloud"

              />
              <p>High winds</p>


            </div>
            <div className={styles.day}>
              <h2>Feb 17th</h2>

              <Image
                src="/SVG/Asset 2.svg"
                width={150}
                height={150}
                alt="cloud"

              />
              <p>Scattered Clouds</p>


            </div>
          </div>
        </div>
        <WeatherComponent data={data} />
      </main>
    </>
  )
}

