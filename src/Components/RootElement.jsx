//Importing Dependencies
import { useEffect, useState } from "react";

//Importing Components
import Top from "./TopComponents/Top.jsx";
import Center from "./CenterComponents/Center.jsx";
import Bottom from "./BottomComponents/Bottom.jsx";

//Importing needed Assests
import LandscapesLinks from "../assets/Landscapes/LandscapesLinks.js";
import bgImage from "/src/assets/Buttons_PNG/landscape.jpg";

export default function RootElement() {
  // const [backgroundImage, setBackgroundImage] = useState("/Warrior_Land.jpg");
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % LandscapesLinks.length);
  //   }, 600000); //600000

  //   console.log("Inside the interval");

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);

  // useEffect(() => {
  //   setBackgroundImage(LandscapesLinks[currentIndex]);
  // }, [currentIndex]);
  // const backgroundStyle = {
  //   backgroundImage: `url(${backgroundImage})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   height: "100vh",
  // };

  return (
    <div
      className={`flex flex-col justify-between p-2 bg-[url('/src/assets/Buttons_PNG/landscape.jpg')] bg-cover bg-no-repeat h-screen bg-center`}
    >
      <Top />
      <Center />
      <Bottom />
    </div>
  );
}
