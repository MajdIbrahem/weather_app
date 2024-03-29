import React from 'react'
import { forecastType } from '../types'

import Tile from './Tile'

import {
  getHumidityValue,
  getWindDirection,
  getVisibilityValue,

  getPop,
} from './../helpers'
type props={
    data:forecastType
}
const Forecast = ({ data }: props) => {
    const today=data.list[0]
    return (
        <div className='className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-screen lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg'>
            <div className="mx-auto w-[300px] h-full">
                <section className="text-center">
                    <h2 className="text-2xl font-black">
                        {data.name} <span className="font-thin">{data.country}</span>
                    </h2>
                    <h1 className='text-4xl font-extrabold relative'>{Math.round(today.main.temp)}<sup className='text-sm absolute top-0'>0</sup></h1>
                    <p className="text-sm">{today.weather[0].main} ({today.weather[0].description})</p>
                    <p className="text-sm flex items-center justify-center gap-3">
                        <span className='relative ml-2'>H:{Math.ceil(today.main.temp_max)} <sup className=' absolute top-0 text-xs ml-[1px]'>0</sup></span>
                        <span className='relative ml-2'>L:{Math.floor(today.main.temp_min)} <sup className=' absolute top-0 text-xs ml-[1px]'>0</sup></span></p>
                </section>
                <section className="flex overflow-x-scroll mt-4 pb-2 mb-5">
                    {data.list.map((item, i) => (
                        <div
                        key={i}
                        className="inline-block text-center w-[75px] flex-shrink-0"
                        >
                        <p className="text-sm">
                            {i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}
                        </p>
                        <img
                            alt={`weather-icon-${item.weather[0].description}`}
                            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                        />
                        <p className="text-sm font-bold relative">
                            {Math.round(item.main.temp)} <sup className=' absolute  text-xs ml-[1px]'>0</sup>
                        </p>
                        </div>
                    ))}
                </section>
                <section className="flex flex-wrap  justify-between text-zinc-700">
                        

                        <Tile
                            icon="wind"
                            title="Wind"
                            info={`${Math.round(today.wind.speed)} km/h`}
                            description={`${getWindDirection(
                            Math.round(today.wind.deg)
                            )}, gusts 
                            ${today.wind.gust.toFixed(1)} km/h`}
                        />
                        <Tile
                            icon="feels"
                            title="Feels like"
                            info={`${Math.round(today.main.feels_like)}`}
                            description={`Feels ${
                            Math.round(today.main.feels_like) < Math.round(today.main.temp)
                                ? 'colder'
                                : 'warmer'
                            }`}
                        />
                        <Tile
                            icon="humidity"
                            title="Humidity"
                            info={`${today.main.humidity} %`}
                            description={getHumidityValue(today.main.humidity)}
                        />
                        <Tile
                            icon="pop"
                            title="Precipitation"
                            info={`${Math.round(today.pop * 100)}%`}
                            description={`${getPop(today.pop)}, clouds at ${today.clouds.all}%`}
                        />
                        <Tile
                            icon="pressure"
                            title="Pressure"
                            info={`${today.main.pressure} hPa`}
                            description={` ${
                            Math.round(today.main.pressure) < 1013 ? 'Lower' : 'Higher'
                            } than standard`}
                        />
                        <Tile
                            icon="visibility"
                            title="Visibility"
                            info={`${(today.visibility / 1000).toFixed()} km`}
                            description={getVisibilityValue(today.visibility)}
                        />
                        </section>

            </div>
        </div>
    )
}

export default Forecast