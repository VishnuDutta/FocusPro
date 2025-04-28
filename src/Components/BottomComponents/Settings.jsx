import { act, useEffect, useRef } from "react";
import { useState } from "react";

const LabelCss =
  "relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500";

const liCss = "py-3 px-2 rounded-lg inline hover:text-amber-50 cursor-pointer";

export default function Setting() {
  //All States
  const [showDiv, setshowDiv] = useState(false);
  const [active, SetActive] = useState({
    general_div: true,
    focusMode_div: false,
    calender_div: false,
    tasks_div: false,
    mantras_div: false,
    photos_div: false,
    quotes_div: false,
    linksBook_div: false,
  });

  //All UseRef
  const containerRef = useRef(null);

  //All useEffect

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //All Functions

  function handleClickOutside(event) {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setshowDiv(false);
    }
  }

  function toogleDivShow() {
    setshowDiv((prev) => (prev === false ? true : false));
  }

  function letsHope(divinfo) {
    SetActive((prev) => ({
      general_div: false,
      focusMode_div: false,
      calender_div: false,
      tasks_div: false,
      mantras_div: false,
      photos_div: false,
      quotes_div: false,
      linksBook_div: false,
      [divinfo]: true,
    }));
  }

  return (
    <div className="relative" ref={containerRef}>
      <img
        src="https://img.icons8.com/?size=100&id=59992&format=png&color=000000"
        alt=""
        className="w-10 h-10 cursor-pointer"
        onClick={toogleDivShow}
      />
      {showDiv && (
        <div className="absolute mb-1 md:ml-[100%] bottom-[100%]">
          <div className="bg-black/50 rounded-lg flex flex-row gap-2 p-3 w-110 md:w-140 xl:w-160 xl:p-4 overflow-y-auto">
            <div
              id="setting_Left_Panel"
              className="text-sm sm:text-lg md:text-2xl w-[40%]"
            >
              <ul className="flex flex-col">
                <li
                  onClick={() => letsHope("general_div")}
                  className={`${liCss} ${""}
                    ${active.general_div ? " text-amber-50 " : ""}`}
                >
                  General
                </li>
                <li
                  onClick={() => letsHope("focusMode_div")}
                  className={`${liCss} ${
                    active.focusMode_div ? " text-amber-50" : ""
                  }`}
                >
                  Focus Mode
                </li>
                <li
                  onClick={() => letsHope("calender_div")}
                  className={`${liCss} ${
                    active.calender_div ? " text-amber-50" : ""
                  }`}
                >
                  Calender
                </li>
                <li
                  onClick={() => letsHope("tasks_div")}
                  className={`${liCss} ${
                    active.tasks_div ? " text-amber-50" : ""
                  }`}
                >
                  Tasks
                </li>
                <li
                  onClick={() => letsHope("mantras_div")}
                  className={` ${liCss} ${
                    active.mantras_div ? " text-amber-50" : ""
                  }`}
                >
                  Mantras
                </li>
                <li
                  onClick={() => letsHope("photos_div")}
                  className={`${liCss} ${
                    active.photos_div ? " text-amber-50" : ""
                  }`}
                >
                  Photos
                </li>
                <li
                  onClick={() => letsHope("quotes_div")}
                  className={`${liCss} ${
                    active.quotes_div ? " text-amber-50" : ""
                  }`}
                >
                  Quotes
                </li>
                <li
                  onClick={() => letsHope("linksBook_div")}
                  className={`${liCss} ${
                    active.linksBook_div ? " text-amber-50" : ""
                  }`}
                >
                  Links & Bookmarks
                </li>
              </ul>
            </div>
            <div className="settings_Right_Pannels w-[60%] p-3 overflow-y-auto [&::-webkit-scrollbar]:w-1 rounded-2xl [&::-webkit-scrollbar-track]:bg-lightGray [&::-webkit-scrollbar-thumb]:bg-black/50 h-160">
              {active.general_div && (
                <div className="general_Pannel">
                  <>
                    <h3 className="text-3xl font-bold">General</h3>
                    <h5 className="text-2xl ">Customize</h5>
                  </>
                  <>
                    <ul>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Links</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="Links_toogle"
                          />
                          <label
                            htmlFor="Links_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>BookMark Bar</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="BookMark_toogle"
                          />
                          <label
                            htmlFor="BookMark_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Search</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="Search_toogle"
                          />
                          <label
                            htmlFor="Search_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Weather</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="Weather_toogle"
                          />
                          <label
                            htmlFor="Weather_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Mantras</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="Mantras_toogle"
                          />
                          <label
                            htmlFor="Mantras_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Tasks</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="Tasks_toogle"
                          />
                          <label
                            htmlFor="Tasks_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Quotes</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="Quotes_toogle"
                          />
                          <label
                            htmlFor="Quotes_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>CountDown</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="CountDown_toogle"
                          />
                          <label
                            htmlFor="CountDown_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Focus Stats</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="Focusstats_toogle"
                          />
                          <label
                            htmlFor="Focusstats_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Notes</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="Notes_toogle"
                          />
                          <label
                            htmlFor="Notes_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Sounds</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="Sounds_toogle"
                          />
                          <label
                            htmlFor="Sounds_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Focus Mode</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="Focusmode_toogle"
                          />
                          <label
                            htmlFor="Focusmode_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Clock</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="Clock_toogle"
                          />
                          <label
                            htmlFor="Clock_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                    </ul>
                  </>
                </div>
              )}
              {active.focusMode_div && (
                <div className="focusMode_Pannel">
                  <>
                    <h3 className="text-3xl font-bold">Focus Mode</h3>
                    <h5 className="text-2xl ">Be Productify</h5>
                  </>
                  <>
                    <ul>
                      <p className="pt-4 text-lg">Avoid Distractions</p>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Tab Stash</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="TabStash_toogle"
                          />
                          <label
                            htmlFor="TabStash_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Site blocker</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="Siteblocker_toogle"
                          />
                          <label
                            htmlFor="Siteblocker_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Blur Background</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="Blurbackground_toogle"
                          />
                          <label
                            htmlFor="Blurbackground_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Sounds</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="Sound_toogle"
                          />
                          <label
                            htmlFor="Sound_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                    </ul>
                  </>
                </div>
              )}
              {active.calender_div && (
                <div className="calender_Pannel">
                <>
                  <h3 className="text-3xl font-bold">Loading Soon</h3>
                  <h5 className="text-2xl ">
                    As the Application is in Beta Version please Wait
                  </h5>
                </>
                <>
                  <ul>
                    <p className="pt-4 text-lg">Calender Panel</p>
                    <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                      <p>Add</p>
                      <>
                        <input
                          type="checkbox"
                          className="peer sr-only opacity-0"
                          id="Calender_toogle"
                        />
                        <label
                          htmlFor="Calender_toogle"
                          className={LabelCss}
                        ></label>
                      </>
                    </li>
                  </ul>
                </>
              </div>
              )}
              {active.tasks_div && (
                <div className="Tasks_Pannel">
                  <>
                    <h3 className="text-3xl font-bold">Tasks</h3>
                    <h5 className="text-2xl ">Breaking Goals Breaks Mind</h5>
                  </>
                  <>
                    <ul>
                      <p className="pt-4 text-lg">Avoid Distractions</p>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Stay Open</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="StayOpen_toogle"
                          />
                          <label
                            htmlFor="StayOpen_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Top Task at Center Screen</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="TopTask_toogle"
                          />
                          <label
                            htmlFor="TopTask_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                    </ul>
                  </>
                </div>
              )}
              {active.mantras_div && (
                <div className="Mantras_Pannel">
                  <>
                    <h3 className="text-3xl font-bold">Mantras</h3>
                    <h5 className="text-2xl ">
                      Simple Phrases to build positive mental habits
                    </h5>
                  </>
                  <>
                    <ul>
                      <p className="pt-4 text-lg">General</p>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Enable Mantras</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="EnableMantras_toogle"
                          />
                          <label
                            htmlFor="EnableMantras_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Frequency</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="Frequency_toogle"
                          />
                          <label
                            htmlFor="Frequency_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <p className="pt-4 text-lg">Feeds</p>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>ATUM Mantras</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="AtumMantras_toogle"
                          />
                          <label
                            htmlFor="AtumMantras_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>My Mantras</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="MyMantras_toogle"
                          />
                          <label
                            htmlFor="MyMantras_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                    </ul>
                  </>
                </div>
              )}
              {active.photos_div && (
                <div className="Photos_Pannel">
                  <>
                    <h3 className="text-3xl font-bold">Loading Soon</h3>
                    <h5 className="text-2xl ">
                      As the Application is in Beta Version please Wait
                    </h5>
                  </>
                  <>
                    <ul>
                      <p className="pt-4 text-lg">Chill</p>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Do you find this App Productive</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="Productive_toogle"
                          />
                          <label
                            htmlFor="Productive_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                    </ul>
                  </>
                </div>
              )}
              {active.quotes_div && (
                <div className="Quotes_Pannel">
                  <>
                    <h3 className="text-3xl font-bold">Loading Soon</h3>
                    <h5 className="text-2xl ">
                      As the Application is in Beta Version please Wait
                    </h5>
                  </>
                  <>
                    <ul>
                      <p className="pt-4 text-lg">Quotes Panel</p>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>
                          Do You need to Add your personal Quotes in your
                          Dashboard
                        </p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="PersonalQuotes_toogle"
                          />
                          <label
                            htmlFor="PersonalQuotes_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                    </ul>
                  </>
                </div>
              )}
              {active.linksBook_div && (
                <div className="Links&Book_Pannel">
                  <>
                    <h3 className="text-3xl font-bold">Loading Soon</h3>
                    <h5 className="text-2xl ">
                      As the Application is in Beta Version please Wait
                    </h5>
                  </>
                  <>
                    <ul>
                      <p className="pt-4 text-lg">Links&Book Panel</p>
                      <li className="flex justify-between w-[100%] py-2 text-sm sm:text-lg md:text-2xl">
                        <p>Add your personal Quotes in your Dashboard</p>
                        <>
                          <input
                            type="checkbox"
                            className="peer sr-only opacity-0"
                            id="links_books_toogle"
                          />
                          <label
                            htmlFor="links_books_toogle"
                            className={LabelCss}
                          ></label>
                        </>
                      </li>
                    </ul>
                  </>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
