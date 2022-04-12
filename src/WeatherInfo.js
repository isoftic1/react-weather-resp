import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
      <div className="weatherData">
      <div className="row px-2">
        <div className="col">
          <h1>
              <WeatherIcon code={props.data.icon} alt={props.data.description} />
          {props.data.city}
          </h1>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <div className="date"><FormatDate date={props.data.date} /></div>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
         <div className="temperature"><WeatherTemperature celsius={props.data.temperature} /></div>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <div className="description text-capitalize">{props.data.description}</div>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <div className="description text-capitalize">Wind: {Math.round(props.data.wind)} MPH</div>
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <div className="description text-capitalize">Humidity: {props.data.humidity}%</div>
        </div>
      </div>
    </div>
    );
}