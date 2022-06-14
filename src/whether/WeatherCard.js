import React, { useEffect, useState } from 'react'

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
        <article className='widget'>
            <div className='weatherIcon'>
                <i className={`wi ${weatherState}`}></i>
            </div>
            <div className='weatherInfo'>
                <div className='temperature'>
                    <span>{temp}&deg;</span>
                </div>
                <div className='description'>
                    <div className='weatherCondition'>{main}</div>
                    <div className='place'>{name},{country}</div>
                </div>
            </div>
            <div className='date'>{new Date().toLocaleString()}</div>
            <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p><i className='wi wi-sunset'></i></p>    
                        <p className='extra-info-leftside'>{timeStr} PM <br/>Sunset</p>                     
                    </div>
                    <div className='two-sided-section'>
                        <p><i className='wi wi-humidity'></i></p>    
                        <p className='extra-info-leftside'>{humidity} <br/>Humidity</p>                     
                    </div>
                </div>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p><i className='wi wi-rain'></i></p>    
                        <p className='extra-info-leftside'>{pressure} <br/>Pressure</p>                     
                    </div>
                    <div className='two-sided-section'>
                        <p><i className='wi wi-strong-wind'></i></p>    
                        <p className='extra-info-leftside'>{speed}<br/>Speed</p>                     
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