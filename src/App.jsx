import React, { useEffect, useState } from "react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";

const App = () => {
  const [query, setQuery] = useState({ q: "tokyo" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      setWeather(data);
    });
  };
  useEffect(() => {
    getWeather();
  }, [query, units]);
  

  console.log(weather);
  

  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-green-500 to-blue-900">
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} setUnits={setUnits} />
      {weather && (
        <>

          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} units={units}/>
          <Forecast title='3 hour step forecast' data={weather.hourly} />
          <Forecast title='daily forecast' data={weather.daily}/>
        </>
      )}
    </div>
  );
};

export default App;
