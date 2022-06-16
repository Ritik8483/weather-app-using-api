import React, { useEffect, useState } from 'react'
import styles from '../whether/Temperature.module.css'

const WeatherCard = ({tempInfo}) => {
    console.log('T',tempInfo)
    
    const{temp,humidity,pressure,main,name,speed,country,sunset}=tempInfo;
    const[weatherState,setWeatherState]=useState('');
    useEffect(() => {
      switch (main) {
        case "Clouds":
            setWeatherState("wi-day-cloudy")
            break;
        case "Haze":
            setWeatherState("wi-day-haze")
            break;
        case "Mist":
            setWeatherState("wi-dust")
        break;
        case "Clear":
            setWeatherState("wi-day-sunny")
            break;
        case "Rain":
            setWeatherState("wi-day-rain")
            break;
        default:
            setWeatherState("wi-day-sunny")
            break;
      }
    }, [ main])
    
    let sec=sunset;
    let date=new Date(sec*1000);
    let timeStr=`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
  return (
    <div>
        <article className={styles.widget}>
            <div className={styles.weatherIcon}>
                <i className='wi wi-day-sunny'></i>
            </div>
            <div className={styles.weatherInfo}>
                <div className={styles.temperature}>
                    <span>{temp}&deg;</span>
                </div>
                <div className={styles.description}>
                    <div className={styles.weatherCondition}>{main}</div>
                    <div className={styles.place}>{name},{country}</div>
                </div>
            </div>
            <div className={styles.date}>{new Date().toLocaleString()}</div>
            <div className={styles['extra-temp']}>
                <div className={styles.temp_info_minmax}>
                    <div className={styles.two_sided_section}>
                        <p><i className='wi wi-sunset'></i></p>    
                        <p className={styles.extra_info_leftside}>{timeStr} PM <br/>Sunset</p>                     
                    </div>
                    <div className={styles.two_sided_section}>
                        <p><i className='wi wi-humidity'></i></p>    
                        <p className={styles.extra_info_leftside}>{humidity} <br/>Humidity</p>                     
                    </div>
                </div>
                <div className={styles.temp_info_minmax}>
                    <div className={styles.two_sided_section}>
                        <p><i className='wi wi-rain'></i></p>    
                        <p className={styles.extra_info_leftside}>{pressure} <br/>Pressure</p>                     
                    </div>
                    <div className={styles.two_sided_section}>
                        <p><i className='wi wi-strong-wind'></i></p>    
                        <p className={styles.extra_info_leftside}>{speed}<br/>Speed</p>                     
                    </div>
                </div>
            </div>
            {/* <div className='extra-temp'> */}
                
            {/* </div> */}
        </article>
    </div>
  )
}

export default WeatherCard