import { useState } from "react";

// Importing images from src
import dashBoardImg from "/src/assets/Buttons_PNG/sunny-weather-gif-onlysun.webp";
import stormyImg from "/src/assets/Buttons_PNG/stromy_img_png.png";
import searchImg from "/src/assets/Buttons_PNG//Search_bar.png";

export default function WeatherApp() {
  const [showDiv, setShowDiv] = useState(true);
  const [searchDiv, setSearchDiv] = useState(true);
  const [weatherData, setWeatherData] = useState({
    temperature: 23,
    cityName: "Gaziabad",
    feelsLike: 19,
    recentRain: 0,
    windSpeed: 18,
  });
  return (
    <>
      <section className="relative cursor-pointer">
        <div className="dashboardWeather">
          <div className="topDashboard flex items-center gap-0.5">
            <img src={dashBoardImg || null} alt="" className="dashboardIcons" />
            <h3 className="dashboardText">{weatherData.temperature}&deg;</h3>
          </div>
          <h2 className="text-sm font-bold w-auto text-center">
            {weatherData.cityName}
          </h2>
        </div>
        {showDiv && (
          <div className="absolute right-0 mt-1 md:mr-[100%]">
            <div className="relative bg-black/50 rounded-lg flex flex-col gap-4 w-70 h-45 p-3 md:w-75 md:h-55 xl:w-120 xl:h-65 xl:p-4">
              <div className="topWheatherDropdown flex flex-row justify-between items-center">
                <div className="topWeatherLeft flex gap-3 items-center">
                  <img
                    src={stormyImg || null}
                    alt=""
                    className="dashboardIcons"
                  />
                  <p className="text-sm font-bold w-auto text-center xl:text-xl">
                    {weatherData.cityName}
                  </p>
                </div>
                <div className="topWeatherRight">
                  <img
                    src={searchImg || null}
                    alt=""
                    className="dashboardIcons"
                  />
                </div>
              </div>
              <div className="bottomWeatherDropdown flex flex-row gap-8">
                <div className="leftWeatherBottom">
                  <p className="text-xl mb-2">Clear</p>
                  <div className="flex flex-row gap-3 ">
                    <img src={stormyImg || null} alt="" className="w-20 h-20" />
                    <h3 className="text-3xl md:text-5xl lg:text-7xl">
                      {weatherData.temperature}&deg;
                    </h3>
                  </div>
                </div>
                <div className="rightWeatherBottom mt-auto mb-[10px]">
                  <p>
                    Feels Like <span>{weatherData.feelsLike} &deg;</span>
                  </p>
                  <p>
                    Recent Rain <span>{weatherData.recentRain}</span> mm
                  </p>
                  <p>
                    Wind <span>{weatherData.windSpeed}</span>Km/h
                  </p>
                </div>
              </div>
              {searchDiv && (
                <div className="absolute top-0">This is the Search Div</div>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
