import React from "react";

interface DayForecast {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
}
interface WeekForecastProps {
  data: {
    forecast: {
      forecastday: DayForecast[];
    };
  };
}

const WeekForecast = ({ data }: WeekForecastProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 w-full">
      {data.forecast.forecastday.map((day, index) => (
        <div
          key={index}
          className=" bg-white/40 text-center p-2 rounded-lg flex items-center flex-col"
        >
          <p>
            {new Date(day.date).toLocaleString("en-US", { weekday: "short" })}
          </p>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <div>
            <p>H {day.day.maxtemp_c.toFixed()}°C</p>
            <p>L {day.day.mintemp_c.toFixed()}°C</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekForecast;
