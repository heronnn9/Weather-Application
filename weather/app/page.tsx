"use client";
import React from "react";
import Input from "@/Components/Input";
import { useState, useEffect } from "react";
import Current from "@/Components/Current";
import WeatherDetails from "@/Components/WeatherDetails";
import WeekForecast from "@/Components/WeekForecast";
const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=db609d450a8548f1be6151632231107&q=${location}&days=7&aqi=yes&alerts=yes
`;
  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City Not found");
        setData({});
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div>
        <h2>Welcome to the Weather app</h2>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div>
        <p>City Not Found</p>
        <p>Enter a Valid City</p>
      </div>
    );
  } else {
    content = (
      <>
        <div>
          <Current data={data} />
          <WeekForecast />
        </div>
        <div>
          <WeatherDetails />
        </div>
      </>
    );
  }

  return (
    <div className=" bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-screen">
      <div className=" bg-white/25 w-full flex flex-col h-fit">
        {/* Input and Logo */}
        <div className="flex flex-col justify-between items-center md:flex-row p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold">
            Weather App
          </h1>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Home;
