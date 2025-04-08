import { useEffect, useRef, useState } from "react";

// Importing images from src
import dashBoardImg from "/src/assets/Buttons_PNG/sunny-weather-gif-onlysun.webp";
import stormyImg from "/src/assets/Buttons_PNG/stromy_img_png.png";
import searchImg from "/src/assets/Buttons_PNG//Search_bar.png";
import loadingImg from "/src/assets/Buttons_PNG//loading_Wheel.webp";
import axios from "axios";

export default function WeatherApp() {
  //All Use States
  const [showDiv, setShowDiv] = useState(false);
  const [searchDiv, setSearchDiv] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  //All Use Refs
  // --For getting Input Search Value
  const inputCity = useRef(null);

  //For closing the container if the user click anywhere outside
  const containerRef = useRef(null);

  //All UseEffect Statement

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    apiToUpdateWeatherInfo();
  }, []);

  //All Functions

  function handleShowDiv() {
    if (showDiv || searchDiv) {
      setSearchDiv(false);
      setShowDiv(false);
    } else {
      setSearchDiv(false);
      setShowDiv(true);
    }
  }

  //Must Function
  function handleClickOutside(event) {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowDiv(false);
      setSearchDiv(false);
    }
  }

  function weahterInputEnterKey(e) {
    if (e.key === "Enter") {
      apiToUpdateWeatherInfo();
      setSearchDiv(false);
    }
  }

  async function apiToUpdateWeatherInfo() {
    setLoading(true);
    const tempCity = inputCity.current
      ? inputCity.current.value
      : localStorage.getItem("inputCity");
    localStorage.setItem("inputCity", tempCity);
    // axios
    //   .post("http://localhost:3000/api/", { tempCity })
    //   .then((res) => updateWeatherInfoState(res.data))
    //   .catch((err) => console.log(err))
    // .finally(() => setLoading(false));

    try {
      const res = await axios.post("http://localhost:3000/api/", { tempCity });
        updateWeatherInfoState(res.data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  function updateWeatherInfoState(data) {
    setWeatherData((prev) => ({
      ...prev,
      temperature: 23,
      cityName: data.location.name,
      feelsLike: data.current.feelslike_c,
      recentRain: 0,
      windSpeed: data.current.wind_kph,
    }));
    inputCity.current.value = "";
  }

  //Debounce function is for the Search options as to Reduce the API Calls
  // const debounceWeatherSearch = (fn, delay) => {
  //   let timer;
  //   return function () {
  //     let context = this,
  //     args = arguments;
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       UpdateWeatherInfo.apply(context, arguments);
  //     }, delay);
  //   };
  // };

  // const betterfunction = debounceWeatherSearch(UpdateWeatherInfo , 600);

  return (
    <>
      <section className="relative cursor-pointer" ref={containerRef}>
        <div className="dashboardWeather" onClick={handleShowDiv}>
          <div className="topDashboard flex items-center gap-0.5">
            <img src={dashBoardImg || null} alt="" className="dashboardIcons" />
            <h3 className="dashboardText">
              {weatherData.temperature || "23"}&deg;
            </h3>
          </div>
          <h2 className="text-sm font-bold text-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm">
            {weatherData.cityName || "New Delhi"}
          </h2>
        </div>
        {/* Dropdown Div  */}
        {showDiv && (
          <div className="absolute right-0 mt-1 md:mr-[100%]">
            <div className="relative bg-black/50 rounded-lg flex flex-col gap-6 w-70 h-45 p-3 sm:w-70 sm:h-45 md:w-80 md:h-50 lg:w-100 lg:h-50 xl:w-120 xl:h-60 xl:p-4">
              <div className="topWheatherDropdown flex flex-row justify-between items-center">
                <div className="topWeatherLeft flex gap-3 items-center">
                  <img
                    src={stormyImg || null}
                    alt=""
                    className="dashboardIcons"
                  />
                  <p className="text-sm font-bold w-auto text-center xl:text-xl lg:text-lg">
                    {weatherData.cityName || "New Delhi"}
                  </p>
                </div>
                <div className="topWeatherRight flex gap-2 items-center">
                  <img
                    onClick={() => setSearchDiv(true)}
                    src={searchImg || null}
                    alt=""
                    className="w-5 h-5 lg:w-5 lg:h-5 md:w-3 md:h-3 sm:w-2 sm-2 hover:scale-110%"
                  />
                  {searchDiv && (
                    <input
                      ref={inputCity}
                      defaultValue={localStorage.getItem("inputCity")}
                      onKeyUp={(e) => weahterInputEnterKey(e)}
                      type="text"
                      className="absolute left-0 top-0 w-[100%] bg-black/50 h-10 rounded-lg text-center text-sm outline-none border border-lightGray border-t-0 border-x-0 lg:text-lg md:text-md sm:text-sm"
                      placeholder="Search your city"
                    />
                  )}
                </div>
              </div>
              <div className="bottomWeatherDropdown flex flex-row gap-8">
                <div className="leftWeatherBottom">
                  <p className="text-xl mb-2 lg:text-lg">Clear</p>
                  <div className="flex flex-row gap-3 ">
                    <img
                      src={stormyImg || null}
                      alt=""
                      className="w-20 h-20 lg:w-15 lg:h-15"
                    />
                    <h3 className="text-3xl md:text-5xl lg:text-5xl">
                      {weatherData.temperature || "23"}&deg;
                    </h3>
                  </div>
                </div>
                <div className="rightWeatherBottom mt-auto mb-[10px] md:text-sm lg:text-lg">
                  <p>
                    Feels Like{" "}
                    <span>{weatherData.feelsLike || "19"} &deg;</span>
                  </p>
                  <p>
                    Recent Rain <span>{weatherData.recentRain || "12"}</span> mm
                  </p>
                  <p>
                    Wind <span>{weatherData.windSpeed || "18"}</span>Km/h
                  </p>
                </div>
              </div>
              {loading && (
                <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black/50 flex items-center">
                  <img src={loadingImg} alt="" className="h-20 w-20 mx-auto" />
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
