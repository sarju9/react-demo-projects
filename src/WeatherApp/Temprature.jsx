import React, { useEffect, useState } from 'react'
import "./style.css";

const Temprature = () => {
    const [searchInput, setSearchInput] = useState('rajkot');

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=a3879e0185196e735cfbcd332e308834`;

            const response = await fetch(url);
            const data = await response.json();

            console.log("data",data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input type='search' placeholder='Search...' autoFocus id="search"
                        className='searchTerm' value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
                    <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>

            {/* our temprature card */}
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={"wi wi-day-sunny"}></i>
                </div>

                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>25.5&deg;</span>
                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>sunny</div>
                        <div className='place'>Rajkot, India</div>
                    </div>
                </div>

                <div className='date'>
                    {new Date().toLocaleString()}
                </div>

                {/* our 4column section */}
                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className='two-sided-section'>
                            <p>
                                <i className={'wi wi-sunset'}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                19:19 PM <br />
                                Sunset
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p>
                                <i className={'wi wi-humidity'}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                19:19 PM <br />
                                Humidity
                            </p>
                        </div>
                    </div>

                    <div className='weather-extra-info'>
                        <div className='two-sided-section'>
                            <p>
                                <i className={'wi wi-rain'}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                19:19 PM <br />
                                Pressure
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p>
                                <i className={'wi wi-strong-wind'}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                19:19 PM <br />
                                Speed
                            </p>
                        </div>
                    </div>

                </div>

            </article>
        </>
    )
}

export default Temprature