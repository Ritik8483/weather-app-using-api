import React, { useEffect, useState } from 'react'
import styles from '../whether/Temperature.module.css'
import WeatherCard from './WeatherCard';

const Temperature = () => {
    const[searchValue,setSearchValue]=useState("Delhi");
    const[tempInfo,setTempInfo]=useState('')
    const getWeatherInfo=async ()=>{
        // alert('sds');
        try {
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=8ecafee68dd6c8ddb072603564e57925`;
            const fetchedData=await fetch(url);
            const jsonData=await fetchedData.json();
            console.log('JSON',jsonData);
            const {temp,humidity,pressure}=jsonData.main;
            const{main}=jsonData.weather[0]
            const{name}=jsonData;
            const{speed}=jsonData.wind;
            const{country,sunset}=jsonData.sys;
            
            const weatherData={
                temp,humidity,pressure,main,name,speed,country,sunset
            }
            setTempInfo(weatherData)

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getWeatherInfo()
    }, [])
    
  return (
    <div>
        <div className={styles.container}>
        <div className={styles.wrap}>
            <div className={styles.search}>
                <input type='search' name='search' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder='search...' id='search' className={styles.searchTerm} />
                <button type='button' onClick={getWeatherInfo} className={styles.searchButton} >search</button>
            </div>
        </div>
        </div>
        <WeatherCard tempInfo={tempInfo} />
    </div>
  )
}

export default Temperature