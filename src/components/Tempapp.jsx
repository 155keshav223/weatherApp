// Api fetch
import React, { useEffect, useState } from 'react'
import "./css/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
const Tempapp = () =>{
    const [city,setCity] = useState(null);
    const [search,setSearch]=useState(null);
    //fetching data
    useEffect( ()=>{
        const fetchApi = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=matric&appid=de91474d844864d4d40c2837c175c944`;
            const response = await fetch(url);
            const resJson = await response.json(); 
            setCity(resJson.main);
        }
        fetchApi();
    },[search])
    return(
        <>
        <div className="box">
            <div className='inputData'>
                <h1 className='city'>Search City</h1>
                <input type='search'
                className='inputFeild'
                placeholder='Enter City'
                onChange={(event)=>{
                    setSearch(event.target.value)

                }}/>
                {
                    !city ? (
                        <p>No Data Found</p>
                    ) : (
                        <div className='information'>
                    <div className='city'>
                        <FontAwesomeIcon icon={faLocationDot} className='Location_mark' />
                        <h1 className='cityName'>{search}</h1>
                    </div>
                    <div className='weatherInfo'>
                        <span className='temp'>Temprature {city.temp}&deg;</span>
                        <span className='minmax'>max: {city.temp_max}&deg; || min: {city.temp_min}&deg;</span>

                    </div>
                </div>

                    )
                }                  
            </div>
        </div>
        </>
    )
}
export default Tempapp;