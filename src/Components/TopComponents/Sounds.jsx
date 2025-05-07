import { useEffect, useRef, useState } from "react";
import MasterPlay from "./MasterPlay";
import MasterVolume from "./MasterVolume";
import MasterPause from "./MasterPause";
import SingliSoundSpaceLi from "./SoundSpaces/SoundSpaces";
import SingliSoundSpaceAudio from "./SoundSpaces/SingliSoundSpaceAudio";
// const cloudAudio = new Audio("/src/assets/Sounds/audioFile.mp3");

const BtnCss =
  "text-sm cursor-pointer transition-all text-white px-2 py-1 rounded-lg border-black/50 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[2px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] lg:text-lg xl:font-bold xl:text-xl flex items-center gap-1 border";

const tempLiCss =
  "relative flex flex-col items-center h-40 w-30 mx-auto my-auto lg:h-full lg:w-full";

const audioFiles = [
  {
    name : "cloudAudio",
    src : "/src/assets/Sounds/audioFile.mp3"
  },
  {
    name : "wind",
    src : "/src/assets/Sounds/audioFile.mp3"
  },
  {
    name: "rainy",
    src : "/src/assets/Sounds/audioFile.mp3",
  },
  {
    name: "thunder",
    src : "/src/assets/Sounds/audioFile.mp3"
  }
]


const audioObjects = audioFiles.map(file => {
  const audio = new Audio(file.src);
  audio.loop = true; // set loop property to true
  return {
    name : file.name,
    audio: audio
  }
})

export default function Sounds() {
  //All States
  const [showdiv, setShowdiv] = useState(true);
  const [masterPlayPause, setMasterPlayPause] = useState(false);

  const [soundBottomDiv, setSoundBottomDiv] = useState({
    allSoundSpacesBottomDiv: true,
    allCustomBottomDiv: false,
  });

  const [soundCenterActiveDiv, setSoundCenterActiveDiv] = useState({
    soundspacesDiv: true,
    youtubeDiv: false,
    customDiv: false,
    nowPlayingDiv: false,
  });

  const [mixSoundPlaying, setMixSoundPlaying] = useState({
    rainfall_Mix: true,
    noise_Mix: false,
    campfire_Mix: false,
    ocean_Mix: false,
    beach_Mix: false,
    forest_Mix: false,
    garden_Mix: false,
    cafe_Mix: false,
    thunderstrom_Mix: false,
    office_Mix: false,
  });

  const [customSoundsToggle, setCustomSoundToggle] = useState({
    cloudsound: true,
    firesound: true,
    windsound: true,
    birdssound: true,
    trainsound: true,
    rainysound: true,
    parrotsound: true,
    bettlesound: true,
    cafesound: true,
    thundersound: true,
    keyboardsound: true,
    musicsound: true,
    airplanesound: true,
  });
  //All useRef

  const currentMixPlaying = useRef(null);

  //All functions

  //Function to create all false state

  const createFalseState = (keys) => {
    return keys.reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
  };

  //Function to create all true state

  const createTrueState = (keys) => {
    return keys.reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
  };

  //function to playpauseMusic

  function handleMixPlaying(clickedName) {
    if (currentMixPlaying.current === clickedName) {
      currentMixPlaying.current = null;
      const keys = Object.keys(mixSoundPlaying);
      const falseState = createFalseState(keys);
      setMixSoundPlaying((prev) => ({
        ...falseState,
      }));

      pauseAllAudio();
     
    } else {
      const keys = Object.keys(mixSoundPlaying);
      const falseState = createFalseState(keys);

      setMixSoundPlaying((prev) => ({
        ...falseState,
        [clickedName]: true,
      }));

      const keysCustom = Object.keys(customSoundsToggle);
      const falseStateCustom = createFalseState(keysCustom);

      switch (clickedName) {
        case "rainfall":
          currentMixPlaying.current = "rainfall";
          setCustomSoundToggle(() => ({
            ...falseStateCustom,
            cloudsound: true,
            windsound: true,
            rainysound: true,
            thundersound: true,
          }));
          audioObjects[0].audio.play();
          break;
        case "noise":
          currentMixPlaying.current = "noise";
          setCustomSoundToggle(() => ({
            ...falseStateCustom,
            windsound: true,
            cafesound: true,
          }));
          break;
        case "campfire":
          currentMixPlaying.current = "campfire";
          setCustomSoundToggle(() => ({
            ...falseStateCustom,
            firesound: true,
          }));
          break;
        case "ocean":
          currentMixPlaying.current = "ocean";
          setCustomSoundToggle(() => ({
            ...falseStateCustom,
            birdssound: true,
            parrotsound: true,
          }));
          break;
        case "beach":
          currentMixPlaying.current = "beach";
          setCustomSoundToggle(() => ({
            ...falseStateCustom,
            bettlesound: true,
            windsound: true,
          }));
          break;
        case "forest":
          currentMixPlaying.current = "forest";
          setCustomSoundToggle(() => ({
            ...falseStateCustom,
            bettlesound: true,
            windsound: true,
            parrotsound: true,
            birdssound: true,
          }));
          break;
        case "garden":
          currentMixPlaying.current = "garden";
          setCustomSoundToggle(() => ({
            ...falseStateCustom,
            birdssound: true,
            parrotsound: true,
            bettlesound: true,
            windsound: true,
          }));
          break;
        case "cafe":
          currentMixPlaying.current = "cafe";
          setCustomSoundToggle(() => ({
            ...falseStateCustom,
            cafesound: true,
          }));
          break;
        case "thunderstrom":
          currentMixPlaying.current = "thunderstrom";
          setCustomSoundToggle(() => ({
            ...falseStateCustom,
            cloudsound: true,
            windsound: true,
            rainysound: true,
            parrotsound: true,
          }));
          break;
        case "office":
          currentMixPlaying.current = "office";
          setCustomSoundToggle(() => ({
            ...falseStateCustom,
            keyboardsound: true,
            airplanesound: true,
          }));
          break;

        default:
          break;
      }
    }
  }

  function handleBottomShowDiv(divName) {
    const keysCustom = Object.keys(soundCenterActiveDiv);
    const falseStateCustom = createFalseState(keysCustom);
    setSoundCenterActiveDiv(() => ({
      ...falseStateCustom,
      [divName]: true,
    }));

    setSoundBottomDiv(() => {
      if (divName == "soundspaces") {
        return {
          allSoundSpacesBottomDiv: true,
          allCustomBottomDiv: false,
        };
      } else if (divName == "youtube") {
        return {
          allSoundSpacesBottomDiv: false,
          allCustomBottomDiv: true,
        };
      } else if (divName == "custom") {
        const keysCustom = Object.keys(customSoundsToggle);
        const trueStateCustom = createTrueState(keysCustom);
        setCustomSoundToggle(() => ({
          ...trueStateCustom,
        }));
        return {
          allSoundSpacesBottomDiv: false,
          allCustomBottomDiv: true,
        };
      }
    });
  }

  function pauseAllAudio(){
    audioObjects.forEach(audioObj => {
      audioObj.audio.pause();
      audioObj.audio.currentTime = 0;
    })
  }



  //  Kl krte hei esko ab
// const handleVolumeChange = (event, audioObj) => {
//       const newVolume = event.target.value;
//       setVolume(newVolume);
//       audioObj.audio.volume = newVolume;
//     };
  
//onChange={(event) => handleVolumeChange(event, audioObj)}



  return (
    <div className="absolute left-[100%] top-4 ml-5">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10">
          <img
            src="https://th.bing.com/th/id/OIP.sTrBRa2jgh6VTHRZfyORPgHaGw?rs=1&pid=ImgDetMain"
            alt=""
            className="cursor-pointer"
            onClick={() => setShowdiv((prev) => (prev ? false : true))}
          />
        </div>
        <div
          className="PlayPause"
          onClick={() => setMasterPlayPause((prev) => (prev ? false : true))}
        >
          {masterPlayPause ? <MasterPlay /> : <MasterPause />}
        </div>
        <div className="VolumeRange">
          <MasterVolume />
        </div>
      </div>

      {showdiv && (
        <div className="absolute bg-black/80 z-2 ml-2 rounded-2xl mt-3 p-5 text-white flex flex-col gap-5 font-bold w-120 sm:w-120 lg:w-200 max-h-250 overflow-x-auto">
          <div className="soundsTop flex justify-between items-center">
            <div className="soundsTopLeft flex gap-1">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
                />
              </svg>
              <p>Sounds</p>
            </div>
            <button className={`${BtnCss} bg-btnBg/50`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <p>Add</p>
            </button>
          </div>
          <div className="soundsCenter flex gap-4 justify-between">
            <ul className="flex gap-1">
              <li>
                <button
                  onClick={() => handleBottomShowDiv("soundspaces")}
                  className={`${BtnCss} ${
                    soundCenterActiveDiv.soundspacesDiv
                      ? "bg-btnBg"
                      : "bg-btnBg/50"
                  }`}
                >
                  Soundspaces
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleBottomShowDiv("youtube")}
                  className={`${BtnCss} ${
                    soundCenterActiveDiv.youtubeDiv ? "bg-btnBg" : "bg-btnBg/50"
                  }`}
                >
                  Youtube
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleBottomShowDiv("custom")}
                  className={`${BtnCss} ${
                    soundCenterActiveDiv.customDiv ? "bg-btnBg" : "bg-btnBg/50"
                  }`}
                >
                  Custom
                </button>
              </li>
            </ul>
            <ul className="nowPlaying">
              <li>
                <button
                  className={`${BtnCss} ${
                    soundCenterActiveDiv.nowPlayingDiv
                      ? "bg-btnBg"
                      : "bg-btnBg/50"
                  }`}
                >
                  NowPlaying
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          {soundBottomDiv.allSoundSpacesBottomDiv && (
            <div className="soundSpaces">
              <ul className="grid grid-cols-3 lg:grid-cols-5 gap-2">
                <SingliSoundSpaceLi
                  src={
                    "https://tse3.mm.bing.net/th/id/OIP.3mRpnCpIKHDg0SBuQvhlGgHaEo?rs=1&pid=ImgDetMain"
                  }
                  mixPlayingStatus={mixSoundPlaying.rainfall}
                  name={"Rainfall"}
                  svgElement={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="size-10 absolute inset-0 m-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                      />
                    </svg>
                  }
                  callBack={() => handleMixPlaying("rainfall")}
                />
                <SingliSoundSpaceLi
                  src={
                    "https://tse1.mm.bing.net/th/id/OIP.o8Z76ZN6QZpUfdeG43LsbQHaEo?pid=ImgDet&w=474&h=296&rs=1"
                  }
                  id={"noise"}
                  mixPlayingStatus={mixSoundPlaying.noise}
                  name={"Noise"}
                  svgElement={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="size-10 absolute inset-0 m-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m3.75 7.5 16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0 0 12 6.75Zm-1.683 6.443-.005.005-.006-.005.006-.005.005.005Zm-.005 2.127-.005-.006.005-.005.005.005-.005.005Zm-2.116-.006-.005.006-.006-.006.005-.005.006.005Zm-.005-2.116-.006-.005.006-.005.005.005-.005.005ZM9.255 10.5v.008h-.008V10.5h.008Zm3.249 1.88-.007.004-.003-.007.006-.003.004.006Zm-1.38 5.126-.003-.006.006-.004.004.007-.006.003Zm.007-6.501-.003.006-.007-.003.004-.007.006.004Zm1.37 5.129-.007-.004.004-.006.006.003-.004.007Zm.504-1.877h-.008v-.007h.008v.007ZM9.255 18v.008h-.008V18h.008Zm-3.246-1.87-.007.004L6 16.127l.006-.003.004.006Zm1.366-5.119-.004-.006.006-.004.004.007-.006.003ZM7.38 17.5l-.003.006-.007-.003.004-.007.006.004Zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007Zm-.5 1.873h-.008v-.007h.008v.007ZM17.25 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0 4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  }
                  callBack={() => handleMixPlaying("noise")}
                />
                <SingliSoundSpaceLi
                  src={
                    "https://tse4.mm.bing.net/th/id/OIP.l3o6XgKim2OrdIVzVxZcCAHaHa?rs=1&pid=ImgDetMain"
                  }
                  mixPlayingStatus={mixSoundPlaying.campfire}
                  name={"Campfire"}
                  svgElement={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="size-10 absolute inset-0 m-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                      />
                    </svg>
                  }
                  callBack={() => handleMixPlaying("campfire")}
                />
                <SingliSoundSpaceLi
                  src={
                    "https://tse1.mm.bing.net/th/id/OIP.NfWhd_54ylrrWVs2mirkigHaEo?rs=1&pid=ImgDetMain"
                  }
                  mixPlayingStatus={mixSoundPlaying.ocean}
                  name={"Ocean"}
                  svgElement={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="size-10 absolute inset-0 m-auto"
                    >
                      <path
                        d="M4 17.5L3 12L12 9L21 12L20 17.5M5 11.3333V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V11.3333M10 5V3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5M2 21C3 22 6 22 8 20C10 22 14 22 16 20C18 22 21 22 22 21"
                        stroke="#ffffff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  callBack={() => handleMixPlaying("ocean")}
                />
                <SingliSoundSpaceLi
                  src={
                    "https://th.bing.com/th/id/OIP.9z-mYncoS-qWaq4BonvQ_wHaEK?rs=1&pid=ImgDetMain"
                  }
                  mixPlayingStatus={mixSoundPlaying.beach}
                  name={"Beach"}
                  svgElement={
                    <svg
                      data-v-51ce07eb=""
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      className="size-10 absolute inset-0 m-auto"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M12.858 2.018 C 12.691 2.037,12.458 2.148,12.320 2.273 C 12.159 2.419,10.843 3.844,10.768 3.954 C 10.570 4.242,10.559 4.692,10.742 5.005 C 10.820 5.139,11.029 5.331,11.171 5.400 C 11.421 5.521,11.788 5.520,12.040 5.397 C 12.158 5.339,12.418 5.095,12.796 4.687 L 13.000 4.466 14.630 6.219 C 15.526 7.183,16.263 7.980,16.266 7.989 C 16.270 7.999,16.235 8.002,16.189 7.997 C 16.144 7.991,16.017 7.999,15.907 8.014 C 15.656 8.047,15.451 8.145,15.292 8.306 C 14.938 8.669,14.909 9.214,15.224 9.617 C 15.284 9.693,15.996 10.485,16.807 11.376 L 18.282 12.996 18.027 13.010 C 17.887 13.018,17.739 13.036,17.699 13.049 C 17.391 13.152,17.155 13.390,17.053 13.700 C 17.021 13.798,17.013 13.883,17.020 14.051 C 17.037 14.438,16.976 14.358,18.730 16.288 L 20.275 17.988 16.036 18.000 C 11.393 18.013,11.715 18.002,11.480 18.151 C 11.178 18.342,11.013 18.641,11.015 18.996 C 11.015 19.228,11.057 19.374,11.174 19.549 C 11.331 19.786,11.604 19.958,11.868 19.985 L 12.000 19.999 12.000 21.023 C 12.000 22.109,12.011 22.248,12.111 22.446 C 12.466 23.147,13.465 23.176,13.864 22.496 C 13.986 22.288,13.991 22.223,13.992 21.066 L 13.992 19.993 17.322 19.986 L 20.652 19.980 20.832 19.924 C 21.491 19.721,21.995 19.217,22.204 18.551 C 22.253 18.393,22.260 18.327,22.258 17.988 C 22.257 17.636,22.251 17.587,22.190 17.400 C 22.115 17.168,22.003 16.954,21.868 16.783 C 21.817 16.719,21.334 16.180,20.796 15.587 C 20.257 14.994,19.796 14.485,19.770 14.456 C 19.724 14.404,19.724 14.404,19.855 14.228 C 20.169 13.808,20.301 13.385,20.272 12.890 C 20.248 12.485,20.121 12.123,19.896 11.821 C 19.847 11.755,19.340 11.188,18.771 10.562 C 18.202 9.937,17.736 9.417,17.736 9.407 C 17.736 9.397,17.776 9.340,17.826 9.280 C 18.011 9.057,18.146 8.786,18.233 8.469 C 18.291 8.257,18.290 7.756,18.231 7.524 C 18.180 7.327,18.012 6.970,17.896 6.816 C 17.852 6.757,16.875 5.698,15.726 4.464 C 14.349 2.985,13.601 2.199,13.532 2.158 C 13.325 2.035,13.102 1.989,12.858 2.018 M6.617 6.024 C 5.708 6.112,4.829 6.528,4.178 7.178 C 3.560 7.797,3.186 8.551,3.037 9.482 C 3.025 9.557,2.999 9.584,2.825 9.703 C 2.260 10.086,1.799 10.616,1.482 11.244 C 1.100 12.002,0.980 13.046,1.177 13.888 C 1.498 15.254,2.494 16.346,3.828 16.796 C 4.284 16.949,4.628 16.992,5.405 16.992 L 6.000 16.992 6.000 19.520 C 6.000 21.240,6.008 22.092,6.026 22.189 C 6.130 22.751,6.705 23.107,7.266 22.958 C 7.592 22.871,7.871 22.592,7.958 22.266 C 7.986 22.162,7.991 21.697,7.992 19.566 L 7.992 16.992 8.610 16.992 C 9.279 16.991,9.544 16.965,9.940 16.862 C 11.318 16.502,12.417 15.409,12.778 14.039 C 12.891 13.611,12.919 13.351,12.904 12.876 C 12.884 12.251,12.782 11.819,12.525 11.280 C 12.221 10.640,11.693 10.032,11.118 9.660 C 10.977 9.568,10.970 9.560,10.956 9.444 C 10.910 9.082,10.774 8.638,10.595 8.268 C 10.021 7.076,8.899 6.246,7.596 6.051 C 7.350 6.014,6.860 6.000,6.617 6.024 M7.459 8.052 C 7.832 8.140,8.178 8.344,8.452 8.637 C 8.648 8.846,8.755 9.012,8.854 9.256 C 8.957 9.511,8.979 9.632,9.000 10.032 C 9.033 10.694,9.158 10.892,9.710 11.161 C 10.190 11.395,10.467 11.653,10.690 12.075 C 10.868 12.413,10.908 12.578,10.908 12.984 C 10.907 13.352,10.883 13.492,10.766 13.780 C 10.577 14.247,10.122 14.688,9.645 14.866 C 9.284 15.001,9.295 15.000,6.996 15.000 C 4.706 15.000,4.703 15.000,4.359 14.870 C 3.782 14.652,3.304 14.122,3.145 13.524 C 2.885 12.544,3.369 11.566,4.322 11.147 C 4.630 11.011,4.789 10.862,4.912 10.595 C 4.969 10.469,4.979 10.412,4.995 10.080 C 5.017 9.656,5.068 9.419,5.197 9.146 C 5.488 8.533,6.044 8.124,6.732 8.017 C 6.913 7.989,7.262 8.006,7.459 8.052 "
                        stroke="none"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  }
                  callBack={() => handleMixPlaying("beach")}
                />
                <SingliSoundSpaceLi
                  src={
                    "https://tse1.mm.bing.net/th/id/OIP.ZP6zVSawm8yCVFYFBxIDlAHaFj?rs=1&pid=ImgDetMain"
                  }
                  mixPlayingStatus={mixSoundPlaying.forest}
                  name={"Forest"}
                  svgElement={
                    <svg
                      data-v-51ce07eb=""
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      className="size-10 absolute inset-0 m-auto"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M12.858 2.018 C 12.691 2.037,12.458 2.148,12.320 2.273 C 12.159 2.419,10.843 3.844,10.768 3.954 C 10.570 4.242,10.559 4.692,10.742 5.005 C 10.820 5.139,11.029 5.331,11.171 5.400 C 11.421 5.521,11.788 5.520,12.040 5.397 C 12.158 5.339,12.418 5.095,12.796 4.687 L 13.000 4.466 14.630 6.219 C 15.526 7.183,16.263 7.980,16.266 7.989 C 16.270 7.999,16.235 8.002,16.189 7.997 C 16.144 7.991,16.017 7.999,15.907 8.014 C 15.656 8.047,15.451 8.145,15.292 8.306 C 14.938 8.669,14.909 9.214,15.224 9.617 C 15.284 9.693,15.996 10.485,16.807 11.376 L 18.282 12.996 18.027 13.010 C 17.887 13.018,17.739 13.036,17.699 13.049 C 17.391 13.152,17.155 13.390,17.053 13.700 C 17.021 13.798,17.013 13.883,17.020 14.051 C 17.037 14.438,16.976 14.358,18.730 16.288 L 20.275 17.988 16.036 18.000 C 11.393 18.013,11.715 18.002,11.480 18.151 C 11.178 18.342,11.013 18.641,11.015 18.996 C 11.015 19.228,11.057 19.374,11.174 19.549 C 11.331 19.786,11.604 19.958,11.868 19.985 L 12.000 19.999 12.000 21.023 C 12.000 22.109,12.011 22.248,12.111 22.446 C 12.466 23.147,13.465 23.176,13.864 22.496 C 13.986 22.288,13.991 22.223,13.992 21.066 L 13.992 19.993 17.322 19.986 L 20.652 19.980 20.832 19.924 C 21.491 19.721,21.995 19.217,22.204 18.551 C 22.253 18.393,22.260 18.327,22.258 17.988 C 22.257 17.636,22.251 17.587,22.190 17.400 C 22.115 17.168,22.003 16.954,21.868 16.783 C 21.817 16.719,21.334 16.180,20.796 15.587 C 20.257 14.994,19.796 14.485,19.770 14.456 C 19.724 14.404,19.724 14.404,19.855 14.228 C 20.169 13.808,20.301 13.385,20.272 12.890 C 20.248 12.485,20.121 12.123,19.896 11.821 C 19.847 11.755,19.340 11.188,18.771 10.562 C 18.202 9.937,17.736 9.417,17.736 9.407 C 17.736 9.397,17.776 9.340,17.826 9.280 C 18.011 9.057,18.146 8.786,18.233 8.469 C 18.291 8.257,18.290 7.756,18.231 7.524 C 18.180 7.327,18.012 6.970,17.896 6.816 C 17.852 6.757,16.875 5.698,15.726 4.464 C 14.349 2.985,13.601 2.199,13.532 2.158 C 13.325 2.035,13.102 1.989,12.858 2.018 M6.617 6.024 C 5.708 6.112,4.829 6.528,4.178 7.178 C 3.560 7.797,3.186 8.551,3.037 9.482 C 3.025 9.557,2.999 9.584,2.825 9.703 C 2.260 10.086,1.799 10.616,1.482 11.244 C 1.100 12.002,0.980 13.046,1.177 13.888 C 1.498 15.254,2.494 16.346,3.828 16.796 C 4.284 16.949,4.628 16.992,5.405 16.992 L 6.000 16.992 6.000 19.520 C 6.000 21.240,6.008 22.092,6.026 22.189 C 6.130 22.751,6.705 23.107,7.266 22.958 C 7.592 22.871,7.871 22.592,7.958 22.266 C 7.986 22.162,7.991 21.697,7.992 19.566 L 7.992 16.992 8.610 16.992 C 9.279 16.991,9.544 16.965,9.940 16.862 C 11.318 16.502,12.417 15.409,12.778 14.039 C 12.891 13.611,12.919 13.351,12.904 12.876 C 12.884 12.251,12.782 11.819,12.525 11.280 C 12.221 10.640,11.693 10.032,11.118 9.660 C 10.977 9.568,10.970 9.560,10.956 9.444 C 10.910 9.082,10.774 8.638,10.595 8.268 C 10.021 7.076,8.899 6.246,7.596 6.051 C 7.350 6.014,6.860 6.000,6.617 6.024 M7.459 8.052 C 7.832 8.140,8.178 8.344,8.452 8.637 C 8.648 8.846,8.755 9.012,8.854 9.256 C 8.957 9.511,8.979 9.632,9.000 10.032 C 9.033 10.694,9.158 10.892,9.710 11.161 C 10.190 11.395,10.467 11.653,10.690 12.075 C 10.868 12.413,10.908 12.578,10.908 12.984 C 10.907 13.352,10.883 13.492,10.766 13.780 C 10.577 14.247,10.122 14.688,9.645 14.866 C 9.284 15.001,9.295 15.000,6.996 15.000 C 4.706 15.000,4.703 15.000,4.359 14.870 C 3.782 14.652,3.304 14.122,3.145 13.524 C 2.885 12.544,3.369 11.566,4.322 11.147 C 4.630 11.011,4.789 10.862,4.912 10.595 C 4.969 10.469,4.979 10.412,4.995 10.080 C 5.017 9.656,5.068 9.419,5.197 9.146 C 5.488 8.533,6.044 8.124,6.732 8.017 C 6.913 7.989,7.262 8.006,7.459 8.052 "
                        stroke="none"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  }
                  callBack={() => handleMixPlaying("forest")}
                />
                <SingliSoundSpaceLi
                  src={
                    "https://tse1.mm.bing.net/th/id/OIP.70kZxy-Wb9QPx77rS7hmNgHaEK?rs=1&pid=ImgDetMain"
                  }
                  mixPlayingStatus={mixSoundPlaying.garden}
                  name={"Garden"}
                  svgElement={
                    <svg
                      data-v-51ce07eb=""
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      className="size-10 absolute inset-0 m-auto"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M11.794 3.023 C 11.432 3.100,11.227 3.305,10.627 4.188 C 10.222 4.784,9.576 5.912,9.373 6.378 C 9.349 6.434,9.322 6.480,9.314 6.479 C 9.306 6.479,9.214 6.403,9.108 6.310 C 8.215 5.523,6.908 4.582,6.316 4.300 C 6.147 4.219,6.115 4.212,5.916 4.212 C 5.556 4.212,5.278 4.352,5.091 4.628 C 4.986 4.783,4.937 4.912,4.826 5.328 C 4.577 6.270,4.383 7.648,4.352 8.706 C 4.341 9.066,4.328 9.240,4.310 9.240 C 4.296 9.239,4.165 9.217,4.020 9.191 C 3.293 9.057,2.164 8.969,1.847 9.021 C 1.463 9.084,1.155 9.353,1.046 9.719 C 0.960 10.009,1.024 11.077,1.179 11.952 C 1.674 14.743,3.308 17.302,5.664 18.976 C 6.544 19.602,7.637 20.147,8.676 20.480 C 10.824 21.167,13.216 21.163,15.360 20.467 C 16.401 20.129,17.468 19.595,18.336 18.977 C 20.833 17.198,22.485 14.484,22.895 11.484 C 22.992 10.777,23.020 9.942,22.954 9.719 C 22.845 9.353,22.537 9.084,22.153 9.021 C 21.836 8.969,20.707 9.057,19.980 9.191 C 19.835 9.217,19.704 9.239,19.690 9.240 C 19.672 9.240,19.659 9.066,19.648 8.706 C 19.616 7.609,19.418 6.232,19.151 5.250 C 19.002 4.699,18.898 4.522,18.627 4.358 C 18.384 4.210,18.115 4.167,17.862 4.234 C 17.352 4.370,15.723 5.494,14.842 6.317 C 14.761 6.393,14.688 6.456,14.681 6.456 C 14.674 6.456,14.544 6.216,14.394 5.922 C 14.077 5.304,13.787 4.811,13.402 4.236 C 13.033 3.685,12.730 3.295,12.594 3.198 C 12.383 3.046,12.039 2.971,11.794 3.023 M12.151 5.982 C 12.503 6.577,12.838 7.237,13.079 7.811 C 13.292 8.320,13.292 8.319,13.320 8.472 C 13.334 8.545,13.381 8.680,13.425 8.772 C 13.563 9.059,13.746 9.750,13.857 10.404 C 13.955 10.975,13.992 11.410,13.992 11.969 L 13.992 12.484 13.822 12.668 C 13.242 13.293,12.586 14.255,12.177 15.078 C 12.087 15.260,12.007 15.408,12.000 15.408 C 11.993 15.408,11.913 15.260,11.823 15.078 C 11.532 14.491,11.056 13.739,10.657 13.234 C 10.492 13.025,10.127 12.603,10.059 12.542 C 10.010 12.498,10.008 12.477,10.009 11.966 C 10.009 11.208,10.092 10.518,10.275 9.744 C 10.382 9.294,10.485 8.959,10.575 8.772 C 10.620 8.679,10.667 8.544,10.679 8.472 C 10.702 8.336,10.729 8.262,10.942 7.754 C 11.075 7.439,11.430 6.716,11.610 6.396 C 11.818 6.025,11.981 5.760,12.000 5.760 C 12.011 5.760,12.078 5.860,12.151 5.982 M17.530 7.332 C 17.628 8.043,17.649 8.351,17.650 9.141 C 17.652 9.787,17.647 9.897,17.616 9.914 C 17.596 9.925,17.413 10.014,17.208 10.113 C 16.822 10.300,16.338 10.570,16.096 10.734 C 16.019 10.786,15.952 10.824,15.948 10.820 C 15.943 10.815,15.911 10.617,15.876 10.379 C 15.803 9.871,15.686 9.311,15.555 8.844 L 15.461 8.508 15.836 8.135 C 16.252 7.723,16.651 7.377,17.123 7.020 C 17.424 6.792,17.434 6.787,17.452 6.842 C 17.462 6.874,17.497 7.094,17.530 7.332 M7.316 7.410 C 7.822 7.825,8.520 8.475,8.520 8.533 C 8.520 8.550,8.482 8.702,8.435 8.872 C 8.288 9.408,8.162 10.056,8.076 10.710 C 8.068 10.773,8.056 10.824,8.049 10.824 C 8.043 10.824,7.976 10.782,7.901 10.731 C 7.662 10.570,7.176 10.299,6.792 10.113 C 6.587 10.014,6.404 9.925,6.384 9.914 C 6.353 9.897,6.348 9.787,6.349 9.141 C 6.350 8.727,6.364 8.248,6.381 8.076 C 6.412 7.751,6.521 6.931,6.543 6.858 C 6.553 6.824,6.598 6.849,6.795 6.998 C 6.927 7.099,7.162 7.284,7.316 7.410 M3.504 11.126 C 5.055 11.392,6.527 12.073,7.740 13.084 C 8.039 13.333,8.573 13.859,8.830 14.157 C 9.350 14.762,9.742 15.363,10.104 16.111 C 10.495 16.918,10.770 17.793,10.894 18.624 C 10.909 18.723,10.926 18.835,10.933 18.872 L 10.944 18.940 10.818 18.924 C 9.679 18.778,8.408 18.333,7.404 17.729 C 5.129 16.362,3.540 14.039,3.121 11.470 C 3.051 11.042,3.048 11.058,3.186 11.076 C 3.249 11.085,3.392 11.107,3.504 11.126 M20.928 11.118 C 20.928 11.220,20.831 11.768,20.761 12.058 C 20.286 14.037,19.171 15.780,17.556 17.066 C 16.326 18.045,14.723 18.726,13.183 18.924 L 13.058 18.940 13.071 18.848 C 13.398 16.456,14.613 14.360,16.542 12.856 C 16.979 12.516,17.660 12.099,18.168 11.861 C 18.955 11.493,19.893 11.207,20.700 11.091 C 20.926 11.058,20.928 11.058,20.928 11.118 "
                        stroke="none"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  }
                  callBack={() => handleMixPlaying("garden")}
                />
                <SingliSoundSpaceLi
                  src={
                    "https://thumbs.dreamstime.com/b/empty-wood-table-blur-cafe-coffee-shop-background-top-152533401.jpg"
                  }
                  mixPlayingStatus={mixSoundPlaying.cafe}
                  name={"Cafe"}
                  svgElement={
                    <svg
                      data-v-51ce07eb=""
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      className="size-10 absolute inset-0 m-auto"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M5.724 1.040 C 5.486 1.119,5.304 1.255,5.173 1.451 C 5.003 1.708,5.004 1.700,5.004 3.000 C 5.004 4.300,5.003 4.292,5.173 4.549 C 5.281 4.710,5.417 4.825,5.606 4.913 C 5.733 4.973,5.775 4.980,6.000 4.980 C 6.225 4.980,6.267 4.973,6.394 4.913 C 6.583 4.825,6.719 4.710,6.827 4.549 C 6.997 4.292,6.996 4.300,6.996 3.000 C 6.996 1.700,6.997 1.708,6.827 1.451 C 6.719 1.289,6.582 1.174,6.394 1.088 C 6.279 1.035,6.211 1.021,6.036 1.015 C 5.903 1.011,5.783 1.021,5.724 1.040 M9.710 1.048 C 9.366 1.153,9.091 1.460,9.026 1.811 C 8.991 2.003,8.991 3.997,9.026 4.189 C 9.130 4.751,9.705 5.107,10.266 4.958 C 10.592 4.871,10.871 4.592,10.958 4.266 C 10.984 4.166,10.991 3.902,10.991 3.000 C 10.991 2.098,10.984 1.834,10.958 1.734 C 10.873 1.415,10.606 1.143,10.282 1.044 C 10.133 0.999,9.863 1.001,9.710 1.048 M13.687 1.054 C 13.382 1.158,13.137 1.411,13.044 1.718 C 13.015 1.816,13.009 2.037,13.009 3.000 C 13.009 4.255,13.011 4.282,13.138 4.500 C 13.171 4.554,13.243 4.645,13.299 4.701 C 13.864 5.267,14.826 4.966,14.976 4.177 C 15.008 4.009,15.008 1.991,14.976 1.823 C 14.884 1.339,14.476 1.005,13.982 1.010 C 13.886 1.011,13.757 1.030,13.687 1.054 M3.696 7.025 C 2.997 7.142,2.375 7.644,2.139 8.280 C 1.997 8.662,2.007 8.350,1.998 12.756 C 1.989 17.090,1.996 17.450,2.101 17.972 C 2.500 19.960,4.040 21.500,6.028 21.899 C 6.541 22.002,6.949 22.012,10.332 22.002 C 13.146 21.993,13.477 21.988,13.704 21.951 C 14.786 21.773,15.701 21.327,16.452 20.611 C 16.869 20.214,17.201 19.760,17.469 19.222 C 17.762 18.634,17.927 18.032,17.980 17.358 L 18.009 16.992 18.167 16.992 C 18.374 16.992,18.818 16.936,19.097 16.875 C 20.659 16.533,22.011 15.393,22.616 13.908 C 23.385 12.020,22.962 9.902,21.530 8.470 C 20.720 7.660,19.680 7.160,18.540 7.033 C 18.332 7.009,3.833 7.002,3.696 7.025 M16.001 13.182 C 15.994 16.229,15.984 17.401,15.964 17.499 C 15.833 18.132,15.567 18.649,15.150 19.083 C 14.709 19.542,14.134 19.845,13.495 19.956 C 13.181 20.011,6.804 20.010,6.489 19.955 C 5.961 19.863,5.467 19.629,5.047 19.272 C 4.525 18.828,4.164 18.191,4.044 17.503 C 4.013 17.326,4.008 16.718,4.008 13.149 L 4.008 9.000 10.009 9.000 L 16.009 9.000 16.001 13.182 M18.588 9.060 C 19.184 9.182,19.675 9.448,20.113 9.887 C 20.464 10.238,20.685 10.588,20.839 11.040 C 20.953 11.374,20.988 11.598,20.988 12.000 C 20.988 12.637,20.833 13.152,20.479 13.689 C 20.334 13.909,19.909 14.334,19.689 14.479 C 19.235 14.778,18.718 14.956,18.198 14.993 L 18.000 15.007 18.000 12.000 L 18.000 8.993 18.198 9.007 C 18.307 9.015,18.482 9.039,18.588 9.060 "
                        stroke="none"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  }
                  callBack={() => handleMixPlaying("cafe")}
                />
                <SingliSoundSpaceLi
                  src={"https://wallpaperaccess.com/full/1096121.jpg"}
                  mixPlayingStatus={mixSoundPlaying.thunderstrom}
                  name={"Thunderstrom"}
                  svgElement={
                    <svg
                      data-v-51ce07eb=""
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      className="size-10 absolute inset-0 m-auto"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M8.580 2.019 C 7.173 2.089,5.771 2.551,4.597 3.332 C 2.856 4.490,1.658 6.226,1.200 8.256 C 0.830 9.897,1.001 11.672,1.677 13.216 C 2.195 14.399,3.083 15.542,4.074 16.302 C 4.666 16.756,5.485 17.230,5.805 17.304 C 6.257 17.409,6.763 17.122,6.937 16.662 C 7.039 16.392,6.987 16.004,6.815 15.754 C 6.709 15.600,6.579 15.501,6.282 15.347 C 5.410 14.896,4.762 14.348,4.183 13.572 C 3.035 12.037,2.700 10.013,3.288 8.176 C 3.809 6.551,5.007 5.215,6.572 4.515 C 7.071 4.291,7.808 4.095,8.381 4.033 C 8.677 4.001,9.359 4.001,9.625 4.032 C 10.362 4.119,11.012 4.309,11.654 4.623 C 12.285 4.932,12.786 5.298,13.298 5.824 C 13.961 6.505,14.357 7.149,14.676 8.065 C 14.738 8.243,14.817 8.440,14.851 8.504 C 14.972 8.728,15.253 8.924,15.525 8.976 C 15.600 8.990,16.101 9.000,16.713 9.000 C 17.802 9.001,17.995 9.013,18.360 9.107 C 19.092 9.295,19.751 9.718,20.231 10.307 C 20.578 10.733,20.814 11.239,20.943 11.832 C 21.007 12.123,21.006 12.886,20.943 13.176 C 20.807 13.801,20.553 14.318,20.153 14.786 C 19.665 15.357,18.932 15.787,18.216 15.924 C 18.104 15.945,17.936 15.977,17.843 15.995 C 17.751 16.012,17.621 16.052,17.555 16.082 C 17.395 16.157,17.185 16.371,17.098 16.548 C 17.033 16.682,17.028 16.711,17.028 16.968 C 17.028 17.218,17.034 17.257,17.093 17.382 C 17.128 17.458,17.212 17.578,17.279 17.649 C 17.522 17.905,17.826 18.005,18.210 17.952 C 19.412 17.789,20.551 17.230,21.385 16.394 C 22.180 15.596,22.727 14.555,22.918 13.476 C 23.038 12.802,23.020 11.971,22.872 11.304 C 22.424 9.293,20.863 7.682,18.872 7.177 C 18.350 7.045,18.176 7.027,17.260 7.011 L 16.413 6.996 16.341 6.824 C 16.218 6.530,15.978 6.073,15.782 5.761 C 14.234 3.296,11.498 1.874,8.580 2.019 M12.849 11.016 C 12.590 11.054,12.333 11.215,12.185 11.432 C 12.075 11.592,9.181 16.417,9.107 16.562 C 8.873 17.024,9.052 17.597,9.516 17.869 C 9.728 17.993,9.805 18.000,11.068 18.000 L 12.238 18.000 11.204 19.722 C 10.635 20.669,10.137 21.513,10.097 21.597 C 9.923 21.964,10.013 22.428,10.313 22.720 C 10.481 22.883,10.693 22.975,10.930 22.987 C 11.262 23.005,11.518 22.904,11.725 22.674 C 11.848 22.537,14.862 17.531,14.932 17.348 C 15.096 16.917,14.926 16.414,14.532 16.164 C 14.300 16.016,14.350 16.022,13.004 16.008 L 11.765 15.996 12.842 14.200 C 13.575 12.979,13.933 12.360,13.959 12.269 C 14.044 11.978,13.954 11.574,13.755 11.347 C 13.537 11.099,13.178 10.968,12.849 11.016 "
                        stroke="none"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  }
                  callBack={() => handleMixPlaying("thunderstrom")}
                />
                <SingliSoundSpaceLi
                  src={
                    "https://img.freepik.com/premium-photo/modern-professional-business-office-ready-productive-work-collaboration-sunset-mood_522560-22754.jpg"
                  }
                  mixPlayingStatus={mixSoundPlaying.office}
                  name={"Office"}
                  svgElement={
                    <svg
                      data-v-51ce07eb=""
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      className="size-10 absolute inset-0 m-auto"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M5.568 1.034 C 4.661 1.180,3.908 1.681,3.436 2.454 C 3.381 2.543,3.319 2.656,3.298 2.706 C 3.129 3.095,3.064 3.327,3.026 3.677 C 2.990 4.003,2.990 19.997,3.026 20.323 C 3.166 21.610,4.076 22.621,5.376 22.935 C 5.547 22.976,5.871 22.979,11.892 22.986 C 18.925 22.994,18.449 23.004,18.956 22.835 C 20.063 22.465,20.847 21.489,20.974 20.323 C 21.010 19.997,21.010 4.003,20.974 3.677 C 20.834 2.390,19.924 1.379,18.624 1.065 C 18.453 1.023,18.135 1.021,12.072 1.017 C 8.492 1.015,5.642 1.023,5.568 1.034 M18.266 3.039 C 18.462 3.097,18.554 3.152,18.698 3.296 C 18.857 3.455,18.950 3.632,18.983 3.840 C 19.017 4.057,19.017 19.943,18.983 20.160 C 18.950 20.368,18.857 20.545,18.698 20.704 C 18.554 20.848,18.462 20.903,18.266 20.961 C 18.154 20.994,17.980 21.000,17.072 21.000 L 16.008 21.000 16.008 19.518 C 16.007 18.671,15.997 17.964,15.983 17.868 C 15.951 17.640,15.847 17.437,15.684 17.283 C 15.524 17.131,15.354 17.049,15.131 17.017 C 14.904 16.984,9.096 16.984,8.869 17.017 C 8.417 17.082,8.080 17.418,8.017 17.868 C 8.003 17.964,7.993 18.671,7.992 19.518 L 7.992 21.000 6.928 21.000 C 6.020 21.000,5.846 20.994,5.734 20.961 C 5.538 20.903,5.446 20.848,5.302 20.704 C 5.143 20.545,5.050 20.368,5.017 20.160 C 4.983 19.943,4.983 4.057,5.017 3.840 C 5.050 3.632,5.143 3.455,5.301 3.296 C 5.446 3.151,5.516 3.108,5.712 3.045 C 5.837 3.005,6.171 3.003,11.990 3.001 C 17.572 3.000,18.147 3.004,18.266 3.039 M7.872 5.020 C 7.684 5.043,7.604 5.072,7.452 5.173 C 7.290 5.281,7.175 5.416,7.087 5.606 C 7.027 5.733,7.020 5.775,7.020 6.000 C 7.020 6.225,7.027 6.267,7.087 6.394 C 7.175 6.583,7.290 6.719,7.451 6.826 C 7.624 6.941,7.771 6.984,7.995 6.986 C 8.244 6.987,8.419 6.932,8.598 6.796 C 8.865 6.592,9.000 6.325,9.000 6.000 C 9.000 5.674,8.865 5.408,8.596 5.203 C 8.390 5.046,8.151 4.985,7.872 5.020 M11.844 5.021 C 11.430 5.075,11.078 5.431,11.020 5.852 C 10.945 6.403,11.315 6.906,11.850 6.980 C 12.179 7.024,12.493 6.922,12.715 6.697 C 13.098 6.307,13.099 5.694,12.718 5.306 C 12.485 5.070,12.193 4.974,11.844 5.021 M15.861 5.017 C 15.448 5.066,15.086 5.420,15.021 5.840 C 14.896 6.641,15.723 7.246,16.454 6.888 C 17.043 6.600,17.184 5.800,16.730 5.320 C 16.501 5.079,16.206 4.976,15.861 5.017 M7.776 9.033 C 7.328 9.133,7.007 9.539,7.008 10.006 C 7.009 10.755,7.806 11.224,8.487 10.877 C 8.635 10.801,8.831 10.590,8.912 10.417 C 8.999 10.234,9.027 9.940,8.976 9.750 C 8.879 9.388,8.562 9.094,8.197 9.026 C 8.024 8.994,7.946 8.995,7.776 9.033 M11.800 9.024 C 11.468 9.084,11.174 9.350,11.049 9.706 C 11.004 9.832,11.005 10.154,11.051 10.302 C 11.169 10.687,11.533 10.966,11.942 10.987 C 12.265 11.004,12.518 10.906,12.727 10.682 C 13.305 10.065,12.917 9.069,12.077 9.013 C 11.989 9.008,11.864 9.012,11.800 9.024 M15.796 9.026 C 15.520 9.080,15.219 9.315,15.104 9.565 C 14.890 10.034,15.042 10.564,15.470 10.838 C 15.819 11.062,16.288 11.039,16.624 10.783 C 16.754 10.684,16.915 10.453,16.959 10.301 C 17.005 10.143,17.007 9.844,16.962 9.708 C 16.845 9.351,16.540 9.081,16.187 9.024 C 16.022 8.997,15.941 8.997,15.796 9.026 M7.687 13.054 C 7.280 13.193,7.009 13.568,7.008 13.994 C 7.007 14.870,8.050 15.319,8.691 14.718 C 8.916 14.508,9.013 14.261,8.996 13.937 C 8.973 13.513,8.699 13.168,8.283 13.042 C 8.130 12.996,7.840 13.002,7.687 13.054 M11.724 13.042 C 11.491 13.115,11.305 13.254,11.174 13.451 C 11.057 13.626,11.015 13.772,11.015 14.004 C 11.013 14.291,11.099 14.501,11.300 14.702 C 11.689 15.090,12.321 15.090,12.710 14.702 C 13.241 14.170,13.010 13.260,12.290 13.047 C 12.136 13.001,11.860 12.999,11.724 13.042 M15.710 13.046 C 15.130 13.231,14.849 13.876,15.104 14.435 C 15.179 14.597,15.403 14.821,15.565 14.896 C 16.129 15.154,16.771 14.876,16.962 14.292 C 17.007 14.156,17.005 13.857,16.959 13.699 C 16.915 13.547,16.754 13.316,16.624 13.217 C 16.446 13.081,16.279 13.023,16.044 13.015 C 15.897 13.011,15.790 13.021,15.710 13.046 M13.992 20.004 L 13.992 21.000 12.000 21.000 L 10.008 21.000 10.008 20.004 L 10.008 19.008 12.000 19.008 L 13.992 19.008 13.992 20.004 "
                        stroke="none"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  }
                  callBack={() => handleMixPlaying("office")}
                />
              </ul>
            </div>
          )}
          {soundBottomDiv.allCustomBottomDiv && (
            <>
              <ul className="grid grid-cols-5">
                {customSoundsToggle.cloudsound && (
                  <SingliSoundSpaceAudio
                    svgElement={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-10 inset-0 m-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                        />
                      </svg>
                    }
                  />
                )}

                {customSoundsToggle.firesound && (
                  <SingliSoundSpaceAudio
                    svgElement={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-10 inset-0 m-auto"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                  />
                )}

                {customSoundsToggle.windsound && (
                  <SingliSoundSpaceAudio
                    svgElement={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-10 inset-0 m-auto"
                      >
                        <path
                          d="M3 8H5M7 5.85714V5.5C7 4.11929 8.11929 3 9.5 3C10.8807 3 12 4.11929 12 5.5C12 6.88071 10.8807 8 9.5 8H8"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />

                        <path
                          d="M4 14H5M15 17V17.5C15 19.433 16.567 21 18.5 21C20.433 21 22 19.433 22 17.5C22 15.567 20.433 14 18.5 14H9"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />

                        <path
                          d="M2 11H8M15 8V7.5C15 5.567 16.567 4 18.5 4C20.433 4 22 5.567 22 7.5C22 9.433 20.433 11 18.5 11H12.25"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    }
                  />
                )}

                {customSoundsToggle.birdssound && (
                  <SingliSoundSpaceAudio
                    svgElement={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FFFFFF"
                        viewBox="0 0 512 512"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-10 inset-0 m-auto"
                      >
                        <g>
                          <g>
                            <path d="M252.761,272.572c-24.074-21.069-46.787-28.592-67.564-22.329c-25.352,7.643-40.12,34.153-47.12,50.852    c-19.926-16.208-40.5-22.907-61.333-19.898c-45.777,6.588-74.388,58.148-75.583,60.338c-2.509,4.593-0.815,10.343,3.778,12.857    c1.445,0.787,3,1.162,4.537,1.162c3.352,0,6.602-1.783,8.324-4.926c0.25-0.454,25.352-45.486,61.703-50.671    c18.37-2.639,37.222,5.579,56.018,24.38c2.389,2.393,5.87,3.319,9.129,2.458c3.259-0.861,5.824-3.403,6.722-6.657    c0.12-0.435,12.305-43.639,39.342-51.75c14.065-4.222,30.741,1.986,49.565,18.453c3.926,3.44,9.907,3.051,13.379-0.889    C257.103,282.007,256.705,276.021,252.761,272.572z" />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M214.52,101.633c-17.213-13.773-32.722-18.166-45.99-13.083c-11.241,4.296-17.852,14.259-21.62,22.93    c-12.009-8.491-24.102-11.634-36.065-9.315c-28.129,5.417-43.083,39.606-43.703,41.06c-2.065,4.815,0.167,10.389,4.982,12.449    c1.213,0.523,2.482,0.773,3.731,0.773c3.676,0,7.176-2.157,8.713-5.75c0.111-0.264,11.796-26.43,29.861-29.912    c9.259-1.773,19.555,2.903,30.574,13.917c2.509,2.505,6.204,3.398,9.574,2.319c3.37-1.069,5.87-3.949,6.482-7.435    c0.861-4.977,5.333-19.949,14.278-23.338c8.204-3.125,19.389,3.829,27.333,10.19c4.111,3.287,10.055,2.611,13.333-1.481    C219.27,110.869,218.604,104.901,214.52,101.633z" />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M483.509,487.353c-3.25-32.477-14.426-53.625-33.222-62.847c-18.435-9.046-39.259-3.88-52.648,1.491    c-2.537-31.134-13.389-52.805-32.361-64.527c-37.768-23.347-92.24,3.426-94.555,4.569c-4.685,2.343-6.583,8.037-4.241,12.722    c2.352,4.681,8.037,6.574,12.722,4.241c13.046-6.528,52.185-20.204,76.101-5.403c15.898,9.819,23.954,31.115,23.954,63.291    c0,3.44,1.87,6.602,4.88,8.278c3.018,1.69,6.704,1.579,9.611-0.227c0.278-0.176,28.278-17.236,48.231-7.389    c12.491,6.162,20.111,22.204,22.657,47.69c0.491,4.889,4.611,8.537,9.426,8.537c0.315,0,0.63-0.014,0.954-0.046    C480.232,497.209,484.028,492.566,483.509,487.353z" />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M379.26,14.222c-73.194,0-132.74,59.546-132.74,132.74s59.546,132.74,132.74,132.74S512,220.155,512,146.961    S452.454,14.222,379.26,14.222z M379.26,260.738c-62.74,0-113.777-51.041-113.777-113.777S316.52,33.184,379.26,33.184    c62.74,0,113.777,51.041,113.777,113.777S442.001,260.738,379.26,260.738z" />
                          </g>
                        </g>
                      </svg>
                    }
                  />
                )}

                {customSoundsToggle.trainsound && (
                  <SingliSoundSpaceAudio
                    svgElement={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FFFFFF"
                        viewBox="0 0 120 120"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-14 inset-0 m-auto"
                      >
                        <path d="M96.083,56.208h-5.564l1.716-13.583c0.072-0.569-0.104-1.143-0.484-1.573c-0.379-0.431-0.926-0.677-1.5-0.677h-14  c-0.574,0-1.121,0.247-1.5,0.677c-0.38,0.431-0.556,1.004-0.484,1.573l1.716,13.583h-9.398v-4.166c0-1.104-0.896-2-2-2s-2,0.896-2,2  v4.166H56.25v-5.166c0-1.104-0.896-2-2-2h-2.167V32.708h2.167c1.104,0,2-0.896,2-2s-0.896-2-2-2H23.917c-1.104,0-2,0.896-2,2  s0.896,2,2,2h1.5v16.334h-1.5c-1.104,0-2,0.896-2,2v17.916c0,1.104,0.896,2,2,2s2-0.896,2-2V53.042H52.25v27h-4.141  c-0.917-4.141-4.613-7.25-9.026-7.25s-8.109,3.109-9.026,7.25h-4.14v-4.25c0-1.104-0.896-2-2-2s-2,0.896-2,2v6.25  c0,1.104,0.896,2,2,2h7.999c1.104,0,2-0.896,2-2c0-0.14-0.015-0.275-0.042-0.407c0.212-2.702,2.453-4.843,5.209-4.843  c2.895,0,5.25,2.355,5.25,5.25s-2.355,5.25-5.25,5.25c-1.104,0-2,0.896-2,2s0.896,2,2,2c4.413,0,8.109-3.109,9.026-7.25h6.141  c1.104,0,2-0.896,2-2v-0.001l4.153,0c0.024,0,0.046-0.006,0.069-0.007c0.064-0.002,0.126-0.011,0.188-0.019  c0.072-0.009,0.143-0.019,0.212-0.036c0.054-0.013,0.104-0.031,0.156-0.048c0.073-0.024,0.145-0.048,0.213-0.081  c0.047-0.021,0.09-0.048,0.135-0.073c0.066-0.038,0.132-0.075,0.194-0.12c0.044-0.032,0.084-0.068,0.126-0.104  c0.054-0.047,0.108-0.093,0.158-0.146c0.041-0.043,0.076-0.09,0.113-0.137c0.042-0.053,0.084-0.106,0.12-0.164  c0.033-0.052,0.06-0.107,0.088-0.163c0.031-0.061,0.062-0.12,0.086-0.184c0.022-0.058,0.039-0.118,0.056-0.179  c0.019-0.068,0.038-0.134,0.049-0.205c0.004-0.022,0.013-0.042,0.016-0.063c0.355-2.578,2.591-4.522,5.199-4.522  c2.187,0,4.062,1.345,4.85,3.25h-4.815c-1.104,0-2,0.896-2,2s0.896,2,2,2h4.815c-0.788,1.905-2.663,3.25-4.85,3.25  c-1.104,0-2,0.896-2,2s0.896,2,2,2c4.413,0,8.109-3.109,9.026-7.25h6.641c1.104,0,2-0.896,2-2s-0.896-2-2-2H77.4  c0.797-1.928,2.701-3.25,4.85-3.25c2.608,0,4.844,1.944,5.199,4.522c0,0.001,0.001,0.003,0.001,0.004c0,0,0,0,0,0  c0.033,0.236,0.05,0.479,0.05,0.723c0,2.211-1.397,4.198-3.477,4.944c-1.04,0.373-1.58,1.518-1.207,2.558  c0.292,0.816,1.062,1.325,1.882,1.325c0.224,0,0.452-0.038,0.675-0.118c3.348-1.2,5.685-4.226,6.065-7.709l4.644,0.001c0,0,0,0,0,0  c0.53,0,1.039-0.21,1.414-0.585c0.375-0.375,0.586-0.884,0.586-1.415V58.208C98.083,57.104,97.188,56.208,96.083,56.208z   M29.417,32.708h18.666v16.334H29.417V32.708z M78.519,44.375h9.463l-1.495,11.833h-6.474L78.519,44.375z M94.083,78.041l-3.086,0  c-1.261-3.66-4.754-6.249-8.747-6.249c-2.942,0-5.625,1.409-7.335,3.632c-1.692-2.203-4.345-3.632-7.332-3.632  c-3.992,0-7.485,2.589-8.747,6.249l-2.586,0V60.208h22h10h5.833V78.041z" />
                      </svg>
                    }
                  />
                )}

                {customSoundsToggle.rainysound && (
                  <SingliSoundSpaceAudio
                    svgElement={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#FFFFFF"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-10 inset-0 m-auto"
                      >
                        <path
                          d="M20 15.2422C21.206 14.435 22 13.0602 22 11.5C22 9.15643 20.2085 7.23129 17.9203 7.01937C17.4522 4.17213 14.9798 2 12 2C9.02024 2 6.54781 4.17213 6.07974 7.01937C3.79151 7.23129 2 9.15643 2 11.5C2 13.0602 2.79401 14.435 4 15.2422M12.25 15L9.44995 22M17.05 13L14.25 20M9.05 13L6.25 20"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                  />
                )}

                {customSoundsToggle.parrotsound && (
                  <SingliSoundSpaceAudio
                    svgElement={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 31.191 31.191"
                        fill="#FFFFFF"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-10 inset-0 m-auto"
                      >
                        <g>
                          <g>
                            <path d="M21.452,13.136c0.983,0.204,2.028,0.182,3.062-0.119c3.357-0.98,5.663-3.562,4.709-6.92    c0.004-0.098,0.004-0.19,0.004-0.275c-0.002-0.158,1.129-2.212,1.129-2.212l-2.039,0.043c-0.914-1.354-2.629-2.028-4.282-1.546    c-1.894,0.553-3.04,2.43-2.728,4.33v0.002c-0.937,0.132-2.188-1.026-3.767-3.224c-1.258,2.852-0.399,5.354,0.458,6.137    c-1.188,0.493-3.757,0.464-4.95,0.204C16.016,13.043,18.781,13.331,21.452,13.136z M26.037,3.575    c0.562-0.165,1.15,0.158,1.314,0.72c0.164,0.562-0.16,1.151-0.721,1.315c-0.562,0.165-1.15-0.159-1.314-0.721    C25.15,4.326,25.475,3.738,26.037,3.575z" />
                            <path d="M26.552,5.08c0.281-0.083,0.442-0.376,0.361-0.657c-0.083-0.281-0.377-0.442-0.658-0.36l0,0    c0.034,0.034,0.062,0.073,0.075,0.121c0.045,0.156-0.044,0.318-0.2,0.365c-0.089,0.025-0.18,0.003-0.25-0.048    c-0.01,0.071-0.006,0.146,0.017,0.22C25.977,5,26.271,5.162,26.552,5.08z" />
                            <path d="M16.174,17.414c0.003-0.097,0.004-0.189,0.003-0.274c-0.001-0.158,1.13-2.212,1.13-2.212l-2.039,0.043    c-0.915-1.354-2.63-2.028-4.283-1.546c-1.894,0.553-3.04,2.43-2.728,4.329v0.003c-0.936,0.132-2.187-1.026-3.766-3.225    c-1.258,2.853-0.4,5.355,0.458,6.137C3.762,21.163,1.193,21.134,0,20.873c2.966,3.488,5.732,3.776,8.403,3.58    c0.984,0.204,2.029,0.183,3.062-0.119C14.822,23.354,17.128,20.773,16.174,17.414z M13.582,16.928    c-0.563,0.165-1.151-0.159-1.315-0.722c-0.165-0.562,0.158-1.15,0.721-1.313c0.562-0.165,1.15,0.158,1.314,0.72    C14.466,16.175,14.143,16.764,13.582,16.928z" />
                            <path d="M13.206,15.38L13.206,15.38c0.033,0.033,0.061,0.072,0.075,0.12c0.045,0.156-0.044,0.319-0.2,0.365    c-0.089,0.026-0.18,0.003-0.25-0.047c-0.01,0.071-0.006,0.146,0.016,0.219c0.082,0.281,0.376,0.442,0.657,0.36    c0.281-0.083,0.442-0.376,0.361-0.658C13.781,15.459,13.486,15.298,13.206,15.38z" />
                            <path d="M30.062,21.792c-0.002-0.157,1.129-2.212,1.129-2.212l-2.037,0.043c-0.916-1.354-2.631-2.027-4.283-1.546    c-1.895,0.554-3.04,2.431-2.729,4.33v0.002c-0.936,0.132-2.187-1.025-3.766-3.224c-1.258,2.852-0.4,5.354,0.458,6.137    c-1.188,0.493-3.757,0.464-4.95,0.204c2.967,3.488,5.732,3.776,8.403,3.58c0.983,0.204,2.028,0.182,3.062-0.119    c3.357-0.979,5.662-3.561,4.709-6.92C30.062,21.97,30.062,21.876,30.062,21.792z M27.466,21.58    c-0.563,0.165-1.151-0.159-1.315-0.721s0.158-1.151,0.722-1.314c0.562-0.164,1.149,0.158,1.313,0.721    C28.35,20.827,28.027,21.417,27.466,21.58z" />
                            <path d="M27.09,20.033L27.09,20.033c0.033,0.034,0.061,0.073,0.075,0.121c0.045,0.156-0.044,0.319-0.2,0.365    c-0.089,0.025-0.18,0.003-0.25-0.047c-0.01,0.07-0.006,0.146,0.016,0.219c0.082,0.281,0.377,0.442,0.658,0.36    c0.28-0.083,0.441-0.376,0.36-0.658C27.665,20.113,27.371,19.951,27.09,20.033z" />
                          </g>
                        </g>
                      </svg>
                    }
                  />
                )}

                {customSoundsToggle.bettlesound && (
                  <SingliSoundSpaceAudio
                    svgElement={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 463.002 463.002"
                        fill="#FFFFFF"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-10 inset-0 m-auto"
                      >
                        <path d="M427.661,321.262l-41.907-27.938c-2.057-1.372-3.413-3.565-3.72-6.018l-6.03-48.237  c-0.977-7.814-5.765-14.582-12.809-18.104l-21.252-10.626c-3.778-12.161-8.697-23.735-14.736-34.5  c-5.436-9.688-15.804-15.729-27.107-15.828c0.251-0.766,0.459-1.551,0.631-2.347l11.575-3.858  c8.535-2.845,14.771-10.452,15.887-19.379l5.742-45.936c0.335-2.681,1.945-5.064,4.307-6.376l64.9-36.056  c3.621-2.012,4.926-6.578,2.914-10.198s-6.578-4.926-10.198-2.914l-64.901,36.056c-6.529,3.626-10.979,10.216-11.906,17.628  l-5.742,45.936c-0.404,3.229-2.659,5.98-5.746,7.009l-8.568,2.856c-1.497-3.13-3.695-5.917-6.513-8.151  c-6.259-4.962-12.837-9.107-19.633-12.444l-5.232-18.786c-1.769-6.353-5.46-11.789-10.314-15.795l22.566-28.208  c2.917-3.646,6.667-6.678,10.844-8.767l72.142-36.071c3.705-1.852,5.207-6.357,3.354-10.062c-1.853-3.705-6.356-5.208-10.062-3.354  l-72.143,36.071c-6.104,3.053-11.585,7.483-15.848,12.813l-24.763,30.954c-1.992-0.398-4.035-0.629-6.121-0.629H225.73  c-2.086,0-4.129,0.231-6.121,0.629l-24.763-30.954c-4.263-5.329-9.744-9.76-15.849-12.813L106.855,0.794  c-3.704-1.854-8.21-0.351-10.062,3.354c-1.853,3.705-0.351,8.21,3.354,10.062l72.142,36.071c4.177,2.089,7.927,5.121,10.844,8.767  l22.566,28.208c-4.854,4.006-8.545,9.442-10.314,15.795l-5.232,18.786c-6.796,3.336-13.374,7.481-19.633,12.444  c-2.818,2.235-5.016,5.021-6.513,8.151l-8.568-2.856c-3.087-1.029-5.342-3.78-5.746-7.009l-5.742-45.937  c-0.927-7.411-5.377-14.001-11.906-17.627L67.143,32.946c-3.62-2.011-8.187-0.707-10.198,2.914  c-2.012,3.621-0.707,8.187,2.914,10.198l64.901,36.056c2.361,1.312,3.971,3.695,4.307,6.376l5.742,45.936  c1.116,8.928,7.352,16.535,15.887,19.379l11.575,3.858c0.172,0.797,0.379,1.581,0.631,2.347  c-11.304,0.099-21.672,6.14-27.107,15.829c-6.039,10.764-10.958,22.338-14.736,34.498l-21.253,10.626  c-7.043,3.522-11.832,10.29-12.808,18.104l-6.03,48.237c-0.307,2.453-1.663,4.646-3.719,6.018l-41.907,27.938  c-3.447,2.297-4.378,6.954-2.08,10.4c1.445,2.168,3.823,3.341,6.247,3.341c1.43,0,2.875-0.408,4.153-1.261l41.908-27.938  c5.687-3.792,9.435-9.856,10.282-16.638l6.03-48.237c0.354-2.826,2.085-5.274,4.633-6.548l9.645-4.823  c-2.736,13.518-4.158,27.577-4.158,41.944c0,14.269,1.397,28.256,4.094,41.683l-14.625,13.747c-0.056,0.053-0.112,0.107-0.167,0.162  c-3.767,3.767-5.327,9.121-4.171,14.323l14.095,63.425c0.037,0.168-0.013,0.341-0.135,0.463l-44.895,44.895  c-2.929,2.929-2.929,7.678,0,10.606c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197l44.895-44.895  c3.767-3.767,5.327-9.121,4.171-14.323l-14.095-63.425c-0.034-0.153,0.005-0.31,0.103-0.428l8.336-7.835  c5.807,19.788,14.59,37.976,26.053,53.532c22.604,30.676,52.874,47.571,85.234,47.571s62.63-16.895,85.234-47.571  c11.493-15.598,20.293-33.841,26.099-53.69l8.277,7.979c0.107,0.12,0.151,0.284,0.116,0.442l-14.095,63.426  c-1.156,5.201,0.404,10.555,4.171,14.322l44.895,44.895c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197  c2.929-2.929,2.929-7.678,0-10.606l-44.895-44.895c-0.122-0.122-0.172-0.295-0.135-0.462l14.095-63.426  c1.156-5.201-0.404-10.555-4.171-14.322c-0.032-0.032-0.065-0.064-0.098-0.096l-14.636-14.11  c2.658-13.336,4.036-27.222,4.036-41.385c0-14.367-1.421-28.425-4.157-41.943l9.644,4.822c2.548,1.274,4.28,3.722,4.633,6.548  l6.03,48.237c0.848,6.782,4.595,12.846,10.283,16.638l41.907,27.938c1.279,0.853,2.724,1.261,4.153,1.261  c2.423,0,4.802-1.173,6.247-3.341C432.039,328.216,431.108,323.559,427.661,321.262z M209.835,107.075  c1.98-7.108,8.516-12.073,15.895-12.073h11.542c7.379,0,13.915,4.964,15.895,12.073l2.268,8.143  c-7.838-2.128-15.856-3.215-23.934-3.215s-16.096,1.087-23.934,3.215L209.835,107.075z M179.839,146.034  c15.703-12.451,33.568-19.032,51.662-19.032s35.959,6.581,51.663,19.032c2.058,1.632,3.191,4.123,3.109,6.833  c-0.081,2.659-1.332,5.023-3.431,6.488c-15.604,10.89-33.357,16.646-51.341,16.646s-35.737-5.756-51.341-16.646  c-2.099-1.465-3.35-3.83-3.431-6.488C176.647,150.157,177.78,147.666,179.839,146.034z M239.001,415.626V215.502  c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v200.124c-54.134-5.334-97-67.934-97-144.124c0-32.272,7.564-62.814,21.875-88.323  c2.829-5.043,8.311-8.177,14.305-8.177h13.506c16.872,10.475,35.696,16,54.814,16s37.942-5.525,54.813-16h13.507  c5.994,0,11.476,3.133,14.305,8.176c14.311,25.509,21.875,56.051,21.875,88.324C336.001,347.692,293.135,410.292,239.001,415.626z" />
                      </svg>
                    }
                  />
                )}

                {customSoundsToggle.cafesound && (
                  <SingliSoundSpaceAudio
                    svgElement={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24"
                        fill="#FFFFFF"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-12 inset-0 m-auto"
                      >
                        <title />
                        <desc />
                        <g
                          fill="none"
                          fillRule="evenodd"
                          id="Coffee-Mug"
                          stroke="none"
                          strokeWidth="1"
                        >
                          <g
                            id="Group"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                            transform="translate(4.000000, 4.000000)"
                          >
                            <path
                              d="M11,5 L1,5 C0.44771525,5 -0.0522847498,5.22385763 -0.414213562,5.58578644 C-0.776142375,5.94771525 -1,6.44771525 -1,7 L-1,11 C-1,12.6568542 -0.328427125,14.1568542 0.757359313,15.2426407 C1.84314575,16.3284271 3.34314575,17 5,17 L7,17 C8.65685425,17 10.1568542,16.3284271 11.2426407,15.2426407 C12.3284271,14.1568542 13,12.6568542 13,11 L13,7 C13,6.44771525 12.7761424,5.94771525 12.4142136,5.58578644 C12.0522847,5.22385763 11.5522847,5 11,5 Z"
                              id="Rectangle"
                            />

                            <path
                              d="M17,7 L13,7 L13,9 C13,9.55228475 13.2238576,10.0522847 13.5857864,10.4142136 C13.9477153,10.7761424 14.4477153,11 15,11 C15.5522847,11 16.0522847,10.7761424 16.4142136,10.4142136 C16.7761424,10.0522847 17,9.55228475 17,9 L17,7 Z"
                              id="Rectangle"
                              transform="translate(15.000000, 9.000000) rotate(-90.000000) translate(-15.000000, -9.000000) "
                            />

                            <line
                              id="Path-5"
                              strokeLinecap="round"
                              x1="2"
                              x2="2"
                              y1="2"
                              y2="0"
                            />

                            <line
                              id="Path-5-Copy"
                              strokeLinecap="round"
                              x1="10"
                              x2="10"
                              y1="2"
                              y2="0"
                            />

                            <line
                              id="Path-5-Copy-2"
                              strokeLinecap="round"
                              x1="6"
                              x2="6"
                              y1="2"
                              y2="0"
                            />
                          </g>
                        </g>
                      </svg>
                    }
                  />
                )}

                {customSoundsToggle.thundersound && (
                  <SingliSoundSpaceAudio
                    svgElement={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="#FFFFFF"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-10 inset-0 m-auto"
                      >
                        <polygon
                          className="st0"
                          points="26,16 18.63,16 22.98,3 6,16 13.37,16 9.02,29 "
                        />
                      </svg>
                    }
                  />
                )}

                {customSoundsToggle.keyboardsound && (
                  <SingliSoundSpaceAudio
                    svgElement={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#FFFFFF"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-10 inset-0 m-auto"
                      >
                        <path
                          d="M6 13H6.01M6 17H6.01M10 13H10.01M14 13H14.01M18 17H18.01M18 13H18.01M16 3V5H8V9M10 17H14M5.2 21H18.8C19.9201 21 20.4802 21 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H5.2C4.07989 9 3.51984 9 3.09202 9.21799C2.71569 9.40973 2.40973 9.71569 2.21799 10.092C2 10.5198 2 11.0799 2 12.2V17.8C2 18.9201 2 19.4802 2.21799 19.908C2.40973 20.2843 2.71569 20.5903 3.09202 20.782C3.51984 21 4.0799 21 5.2 21Z"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                  />
                )}

                {customSoundsToggle.musicsound && (
                  <SingliSoundSpaceAudio
                    svgElement={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FFFFFF"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-10 inset-0 m-auto"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M14.3187 2.50498C13.0514 2.35716 11.8489 3.10033 11.4144 4.29989C11.3165 4.57023 11.2821 4.86251 11.266 5.16888C11.2539 5.40001 11.2509 5.67552 11.2503 6L11.25 6.45499C11.25 6.4598 11.25 6.4646 11.25 6.46938V14.5359C10.4003 13.7384 9.25721 13.25 8 13.25C5.37665 13.25 3.25 15.3766 3.25 18C3.25 20.6234 5.37665 22.75 8 22.75C10.6234 22.75 12.75 20.6234 12.75 18V9.21059C12.8548 9.26646 12.9683 9.32316 13.0927 9.38527L15.8002 10.739C16.2185 10.9481 16.5589 11.1183 16.8378 11.2399C17.119 11.3625 17.3958 11.4625 17.6814 11.4958C18.9486 11.6436 20.1511 10.9004 20.5856 9.70089C20.6836 9.43055 20.7179 9.13826 20.7341 8.83189C20.75 8.52806 20.75 8.14752 20.75 7.67988L20.7501 7.59705C20.7502 7.2493 20.7503 6.97726 20.701 6.71946C20.574 6.05585 20.2071 5.46223 19.6704 5.05185C19.4618 4.89242 19.2185 4.77088 18.9074 4.6155L16.1999 3.26179C15.7816 3.05264 15.4412 2.88244 15.1623 2.76086C14.8811 2.63826 14.6043 2.53829 14.3187 2.50498Z"
                          fill="#000000"
                        />
                      </svg>
                    }
                  />
                )}

                {customSoundsToggle.airplanesound && (
                  <SingliSoundSpaceAudio
                    svgElement={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="#FFFFFF"
                        viewBox="0 0 512 512"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-10 inset-0 m-auto"
                      >
                        <g>
                          <g>
                            <path d="M496.079,15.928C485.804,5.652,472.131,0,457.581,0c-0.005,0-0.005,0-0.005,0c-14.561,0-28.244,5.658-38.524,15.942    l-77.59,77.582L88.678,30.329c-3.701-0.909-7.636,0.16-10.344,2.866L39.832,71.697c-2.51,2.505-3.637,6.079-3.031,9.573    c0.612,3.494,2.882,6.472,6.095,7.982l205.926,96.911l-91.848,91.848L34.354,295.869c-2.324,0.34-4.473,1.42-6.132,3.079    L3.19,323.975c-2.712,2.712-3.797,6.653-2.856,10.37c0.941,3.723,3.771,6.674,7.445,7.77l107.063,31.903l20.778,20.772    l34.312,109.573c1.138,3.637,4.095,6.414,7.791,7.323c0.862,0.213,1.734,0.314,2.601,0.314c2.856,0,5.637-1.122,7.701-3.191    l25.027-25.032c1.659-1.659,2.739-3.808,3.079-6.132l17.858-122.618l91.226-91.231l89.769,197.475    c1.479,3.255,4.456,5.573,7.972,6.212c3.489,0.633,7.121-0.489,9.642-3.016l38.508-38.508c2.654-2.654,3.755-6.488,2.914-10.152    l-56.403-244.407l78.447-78.449C517.303,71.71,517.313,37.156,496.079,15.928z M480.661,77.547l-82.717,82.717    c-2.654,2.654-3.755,6.488-2.914,10.152l56.403,244.407l-23.123,23.128l-89.769-197.475c-1.479-3.255-4.456-5.573-7.972-6.212    c-3.499-0.638-7.121,0.489-9.642,3.015L216.029,342.178c-1.659,1.659-2.739,3.808-3.079,6.132l-17.858,122.618l-9.748,9.759    l-29.739-94.959c-0.521-1.675-1.446-3.201-2.691-4.446l-24.617-24.617c-1.276-1.282-2.856-2.223-4.589-2.739l-92.194-27.468    l9.551-9.551l122.624-17.858c2.324-0.34,4.473-1.42,6.132-3.079l105.361-105.361c2.51-2.505,3.638-6.078,3.031-9.572    c-0.612-3.494-2.888-6.472-6.095-7.982L66.193,76.143l23.182-23.187l252.783,63.195c3.723,0.931,7.637-0.154,10.344-2.866    l81.951-81.946c6.169-6.169,14.38-9.567,23.123-9.567c8.738,0,16.943,3.393,23.101,9.551    C493.414,44.064,493.409,64.799,480.661,77.547z" />
                          </g>
                        </g>
                      </svg>
                    }
                  />
                )}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
