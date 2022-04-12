
import React from "react";

export default function WeatherTemperature(props) {
        return (
        <span className="units">
            <div className="temperature">{Math.round(props.celsius)}˚
              <span className="conversion">F{" "}</span></div>
          </span>);
}