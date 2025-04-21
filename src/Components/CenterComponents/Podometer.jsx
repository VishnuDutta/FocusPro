import { useEffect, useRef, useState } from "react";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import ChangingProgressProvider from "./ChangingProgressProvider";
import "react-circular-progressbar/dist/styles.css";

const BtnCss =
  "py-2 px-3 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer sm:px-2 sm:py-1 sm:text-xs lg:px-5 lg:py-4 lg:text-lg 2xl:text-2xl";

// Importing images from src
const playAudio = new Audio("/src/assets/Sounds/pomo-start.mp3");
const stopAudio = new Audio("/src/assets/Sounds/pomo-stop.mp3");

export default function Podometer() {
  //All Use States
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [totalSeconds, setTotalSeconds] = useState(7260);
  const [mode, setMode] = useState("focus");
  const [runningStatus, setRunningStatus] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [showRangeChange, setShowrangeChange] = useState(false);
  var initialTotalSeconds = useRef(totalSeconds);

  //All Use Refst
  let intervalRef = useRef(null);
  let percentageIntervalRef = useRef(null);

  //All UseEffect Statement
  useEffect(() => {
    return () => clearInterval(intervalRef.current); //unmount
  }, []);

  useEffect(() => {
    return () => clearInterval(percentageIntervalRef.current); //unmount
  });

  // For showoff the UI
  useEffect(() => {
    setTimeout(() => {
      setPercentage(100);
    }, 1000);
    setTimeout(() => {
      setPercentage(0);
    }, 1500);
  }, []);

  useEffect(() => {
    updateUIPomodoro();
  }, [totalSeconds]);

  useEffect(() => {
    setPercentage((prev) => {
      return (
        ((initialTotalSeconds.current - totalSeconds) /
          initialTotalSeconds.current) *
        100
      );
    });
  }, [totalSeconds, percentageIntervalRef.current]);

  // All Functions
  function startPomodoro() {
    playAudio
      .play()
      .catch((error) => console.error("Audio play error:", error));
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setTotalSeconds((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setRunningStatus(false);
            setPercentage(0);
            setMode((prevMode) => (prevMode === "focus" ? "break" : "focus"));
            setTotalSeconds(1800);
            return prev;
          }
        });
      }, 1000);
      setRunningStatus(true);
    }
  }

  function updateUIPomodoro() {
    const hours = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    setTime({ hours, minutes, seconds });
  }

  function pausePomodoro() {
    stopAudio
      .play()
      .catch((error) => console.error("Audio play error:", error));
    setShowrangeChange(false);
    if (runningStatus === true) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setRunningStatus(false);
    } else {
      startPomodoro();
    }
  }

  function changeMode() {
    // setMode((prev) => (prev === "focus" ? "break" : "focus"));
    stopAudio
      .play()
      .catch((error) => console.error("Audio play error:", error));
    setMode((prev) => {
      if (prev === "focus") {
        setPercentage(0);
        setTotalSeconds(1800);
        initialTotalSeconds.current = 1800; // Reset initial total seconds
        return "break";
      } else {
        setTotalSeconds(7200);
        setPercentage(0);
        initialTotalSeconds.current = 7200; // Reset initial total seconds
        return "focus";
      }
    });
  }

  function seeHours(e) {
    const hours = parseInt(e.target.value) || 0;
    let tempHours = hours * 3600 + (totalSeconds % 3600);
    setTotalSeconds(tempHours);
    initialTotalSeconds.current = tempHours;
  }

  function seeMinutes(e) {
    const minutes = parseInt(e.target.value) || 0;
    let tempminutes =
      Math.floor(totalSeconds / 3600) * 3600 +
      minutes * 60 +
      (totalSeconds % 60);
    setTotalSeconds(tempminutes);
    initialTotalSeconds.current = tempminutes;
  }

  function showRangeDiv(e) {
    e.preventDefault();
    setShowrangeChange((prev) => {
      return prev === false ? true : false;
    });
  }

  return (
    <>
      <div>
        <ChangingProgressProvider values={[percentage]} className="-z-1">
          {(value) => (
            <CircularProgressbarWithChildren
              className="progressChild max-w-xs sm:max-w-xs 2xl:max-w-xl lg:max-w-md"
              value={value}
              text={`${time.hours}:${time.minutes}:${time.seconds}`}
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                strokeLinecap: "butt",
                trailColor: "#eeeee",
              })}
            >
              <div className="flex justify-center align-middle gap-1 sm:gap-1 lg:gap-3">
                {mode === "focus" ? (
                  <button className={BtnCss} onClick={changeMode}>
                    Focussing
                  </button>
                ) : (
                  <button className={BtnCss} onClick={changeMode}>
                    Breaking
                  </button>
                )}

                {runningStatus ? (
                  <button className="cursor-pointer" onClick={pausePomodoro}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-9 sm:size-10 lg:size-13 2xl:size-18"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM9 8.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H9Zm5.25 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                ) : (
                  <button className="cursor-pointer" onClick={pausePomodoro}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-9 sm:size-10 lg:size-13 2xl:size-18"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
                <button
                  className="cursor-pointer relative z-0"
                  onClick={(e) => showRangeDiv(e)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-9 sm:size-10 lg:size-13 2xl:size-18"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {showRangeChange && (
                    <>
                      <label
                        htmlFor=""
                        className="absolute left-0 mt-2 flex justify-center align-middle gap-2 z-20"
                      >
                        <p>Hours</p>
                        <input
                          type="range"
                          min={0}
                          max={12}
                          value={time.hours}
                          onChange={seeHours}
                        />
                        <p>{time.hours}</p>
                      </label>
                      <label
                        htmlFor=""
                        className="absolute left-0 mt-10 flex justify-center align-middle gap-2 z-20"
                      >
                        <p>Minutes</p>
                        <input
                          type="range"
                          min={1}
                          max={60}
                          value={time.minutes}
                          onChange={seeMinutes}
                        />
                        <p>{time.minutes}</p>
                      </label>
                    </>
                  )}
                </button>
              </div>
            </CircularProgressbarWithChildren>
          )}
        </ChangingProgressProvider>
      </div>
    </>
  );
}
