import axios from "axios";
import React, { useEffect, useState } from "react";
import Details from "./details";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [name, setName] = useState("");
  const getWeather = async (city) => {
    if (name.trim() === "") {
      return null;
    } else {
      const res = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6b4c292e3e049dbf64d6c2441cc77864&lang=ru`
      );
      const { data } = res;
      setWeather(data);
    }
  };
  function search() {
    getWeather(name);
  }
  function enter(e) {
    if (e.key === "Enter") {
      getWeather(name);
    }
  }
  useEffect(() => {
    getWeather(name);
  }, []);
  console.log(weather);
  return (
    <>
      <div className="w-[40%] flex items-center justify-center mx-auto mt-[50px] ">
        <input
          type="text"
          id="default-input"
          onChange={(e) => setName(e.target.value.trim())}
          onKeyDown={enter}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          type="button"
          onClick={search}
          className="text-white ml-[10px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Search
        </button>
      </div>
      {name ? (
        <Details data={weather} />
      ) : (
        <h1 className="text-3xl my-4 text-red-600">Нет Данных!!!</h1>
      )}
    </>
  );
};

export default Weather;

// https://api.openweathermap.org/data/2.5/weather?q=Bishkek&units=metric&appid=6b4c292e3e049dbf64d6c2441cc77864&lang=ru
