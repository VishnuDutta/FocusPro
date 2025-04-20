import { useEffect, useRef } from "react";
import { useState } from "react";

export default function Clock() {
  //All States
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [AMPM, setAMPM] = useState("AM");
  const [userName, setUserName] = useState();

  //All UseRef
  const userFetchName = useRef(null);

  //All useEffect
  useEffect(() => {
    window.requestAnimationFrame(setClock);
  }, []);

  //All Functions
  function setClock() {
    const date = new Date();
    setHours(date.getHours() % 12 || 12);
    setMinutes(String(date.getMinutes()).padStart(2, "0"));
    setAMPM(date.getHours() < 12 ? "AM" : "PM");
    requestAnimationFrame(setClock);
  }

  function enterUserName(e) {
    if (e.key === "Enter") {
      if (userFetchName) {
        const name = userFetchName.current.value.trim();
        setUserName(name);
      }
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <p className="text-9xl font-bold items-center flex justify-center content-center gap-2">
        {hours}
        <span className=" animate-pulse h-auto pb-[1%]">:</span>
        {minutes}
        <span className="text-2xl mt-auto pb-[0.5%]">{AMPM}</span>
      </p>
      <p className="text-4xl font-bold flex justify-center content-center gap-3">
        Good evening
        {userName ? (
          <span>{userName}</span>
        ) : (
          <input
            type="text"
            ref={userFetchName}
            onKeyUp={(e) => enterUserName(e)}
            className="border border-b-black border-t-0 border-r-0 border-l-0 w-50"
          />
        )}
      </p>
    </div>
  );
}
