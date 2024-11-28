import React from 'react';
import "../index.scss";

export const iconUrl= 'http://openweathermap.org/img/wn/';

const WeatherCard = (props) => {

    return (
        <weather-card>
            <div className='weather-container'>
                <div className='weather-title'>
                    {props.wt_city} 날씨<br />
                    {props.wt_temp}°C<br />
                </div>
                <div className="weather-info">
                    {props.wt_weather}<br />
                </div>
            </div>
            <div className='weather-icon'>
                <img
                    alt={props.wt_weather}
                    src={props.wt_icon}
                    style={{width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
        </weather-card>
    );
}
export default WeatherCard;
