import { useEffect, useRef, useState } from "react";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import ChangingProgressProvider from "./ChangingProgressProvider";
import "react-circular-progressbar/dist/styles.css";

// Importing images from src
import pauseBtn from "/src/assets/Buttons_PNG//pause_btn.png";

export default function Podometer() {
  //All Use States
  //   const [value, setValue] = useState(0);

  //All Use Refst

  //All UseEffect Statement

  //All Functions
  return (
    <>
      <div>
        <ChangingProgressProvider values={[60]}>
          {(value) => (
            <CircularProgressbarWithChildren
              className="progressChild max-w-lg"
              value={value}
              text={`${value}%`}
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                strokeLinecap: "butt",
                trailColor: "#eee",
                root: {
                  position: "relative",
                },
                children: {
                  position: "static",
                  width: "auto",
                  marginTop: "0px",
                  display: "block",
                  justifyContent: "initial",
                  alignItems: "initial",
                },
              })}
            >
              <button>OKAY CLICK ME</button>
            </CircularProgressbarWithChildren>
          )}
        </ChangingProgressProvider>
      </div>
    </>
  );
}
