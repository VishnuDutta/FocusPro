import { useState } from "react";
import MasterPlay from "./MasterPlay";
import MasterVolume from "./MasterVolume";
import MasterPause from "./MasterPause";

const BtnCss =
  "text-sm cursor-pointer transition-all bg-btnBg text-white px-2 py-1 rounded-lg border-black/50 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[2px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] lg:text-lg xl:font-bold xl:text-xl flex items-center gap-1 border";

export default function Sounds() {
  const [showdiv, setShowdiv] = useState(true);
  const [masterPlayPause, setMasterPlayPause] = useState(false);

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
        <div className="absolute bg-black/80 z-2 ml-2 rounded-2xl mt-3 p-5 text-white flex flex-col gap-5 font-bold w-200">
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
            <button className={`${BtnCss}`}>
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
                <button className={`${BtnCss}`}>Soundspaces</button>
              </li>
              <li>
                <button className={`${BtnCss}`}>Youtube</button>
              </li>
              <li>
                <button className={`${BtnCss}`}>Custom</button>
              </li>
            </ul>
            <ul className="nowPlaying">
              <li>
                <button className={`  ${BtnCss} bg-yellow-500`}>
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
          <div className="soundsBottom">
            <div className="SoundSpaces_eachsounds">
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                <li className="relative flex flex-col items-center">
                  <div className="relative h-full w-full">
                    <img
                      src="https://tse3.mm.bing.net/th/id/OIP.3mRpnCpIKHDg0SBuQvhlGgHaEo?rs=1&pid=ImgDetMain"
                      alt=""
                      className="w-full h-full rounded-sm"
                    />
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
                  </div>
                  <p className="text-lg font-semibold text-left mt-1 w-full">
                    Rainfall
                  </p>
                </li>
                <li className="relative flex flex-col items-center">
                  <div className="relative h-full w-full">
                    <img
                      src="https://tse1.mm.bing.net/th/id/OIP.o8Z76ZN6QZpUfdeG43LsbQHaEo?pid=ImgDet&w=474&h=296&rs=1"
                      alt=""
                      className="w-full h-full rounded-sm"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="size-10 absolute inset-0 m-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m3.75 7.5 16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0 0 12 6.75Zm-1.683 6.443-.005.005-.006-.005.006-.005.005.005Zm-.005 2.127-.005-.006.005-.005.005.005-.005.005Zm-2.116-.006-.005.006-.006-.006.005-.005.006.005Zm-.005-2.116-.006-.005.006-.005.005.005-.005.005ZM9.255 10.5v.008h-.008V10.5h.008Zm3.249 1.88-.007.004-.003-.007.006-.003.004.006Zm-1.38 5.126-.003-.006.006-.004.004.007-.006.003Zm.007-6.501-.003.006-.007-.003.004-.007.006.004Zm1.37 5.129-.007-.004.004-.006.006.003-.004.007Zm.504-1.877h-.008v-.007h.008v.007ZM9.255 18v.008h-.008V18h.008Zm-3.246-1.87-.007.004L6 16.127l.006-.003.004.006Zm1.366-5.119-.004-.006.006-.004.004.007-.006.003ZM7.38 17.5l-.003.006-.007-.003.004-.007.006.004Zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007Zm-.5 1.873h-.008v-.007h.008v.007ZM17.25 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0 4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-left mt-1 w-full">
                    Noise
                  </p>
                </li>
                <li className="relative flex flex-col items-center">
                  <div className="relative h-full w-full">
                    <img
                      src="https://tse4.mm.bing.net/th/id/OIP.l3o6XgKim2OrdIVzVxZcCAHaHa?rs=1&pid=ImgDetMain"
                      alt=""
                      className="w-full h-full rounded-sm"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="size-10 absolute inset-0 m-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-left mt-1 w-full">
                    Campfire
                  </p>
                </li>
                <li className="relative flex flex-col items-center">
                  <div className="relative h-full w-full">
                    <img
                      src="https://tse1.mm.bing.net/th/id/OIP.NfWhd_54ylrrWVs2mirkigHaEo?rs=1&pid=ImgDetMain"
                      alt=""
                      className="w-full h-full rounded-sm"
                    />
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
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-left mt-1 w-full">
                    Ocean
                  </p>
                </li>
                <li className="relative flex flex-col items-center">
                  <div className="relative h-full w-full">
                    <img
                      src="https://tse1.mm.bing.net/th/id/OIP.NfWhd_54ylrrWVs2mirkigHaEo?rs=1&pid=ImgDetMain"
                      alt=""
                      className="w-full h-full rounded-sm"
                    />
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
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-left mt-1 w-full">
                    Ocean
                  </p>
                </li>
                <li className="relative flex flex-col items-center">
                  <div className="relative h-full w-full">
                    <img
                      src="https://tse1.mm.bing.net/th/id/OIP.NfWhd_54ylrrWVs2mirkigHaEo?rs=1&pid=ImgDetMain"
                      alt=""
                      className="w-full h-full rounded-sm"
                    />
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
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-left mt-1 w-full">
                    Ocean
                  </p>
                </li>
                <li className="relative flex flex-col items-center">
                  <div className="relative h-full w-full">
                    <img
                      src="https://tse1.mm.bing.net/th/id/OIP.NfWhd_54ylrrWVs2mirkigHaEo?rs=1&pid=ImgDetMain"
                      alt=""
                      className="w-full h-full rounded-sm"
                    />
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
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-left mt-1 w-full">
                    Ocean
                  </p>
                </li>
                <li className="relative flex flex-col items-center">
                  <div className="relative h-full w-full">
                    <img
                      src="https://tse1.mm.bing.net/th/id/OIP.NfWhd_54ylrrWVs2mirkigHaEo?rs=1&pid=ImgDetMain"
                      alt=""
                      className="w-full h-full rounded-sm"
                    />
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
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-left mt-1 w-full">
                    Ocean
                  </p>
                </li>
                <li className="relative flex flex-col items-center">
                  <div className="relative h-full w-full">
                    <img
                      src="https://tse1.mm.bing.net/th/id/OIP.NfWhd_54ylrrWVs2mirkigHaEo?rs=1&pid=ImgDetMain"
                      alt=""
                      className="w-full h-full rounded-sm"
                    />
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
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-left mt-1 w-full">
                    Ocean
                  </p>
                </li>
                <li className="relative flex flex-col items-center">
                  <div className="relative h-full w-full">
                    <img
                      src="https://tse1.mm.bing.net/th/id/OIP.NfWhd_54ylrrWVs2mirkigHaEo?rs=1&pid=ImgDetMain"
                      alt=""
                      className="w-full h-full rounded-sm"
                    />
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
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-left mt-1 w-full">
                    Ocean
                  </p>
                </li>
                <li className="relative flex flex-col items-center">
                  <div className="relative h-full w-full">
                    <img
                      src="https://tse1.mm.bing.net/th/id/OIP.NfWhd_54ylrrWVs2mirkigHaEo?rs=1&pid=ImgDetMain"
                      alt=""
                      className="w-full h-full rounded-sm"
                    />
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
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-left mt-1 w-full">
                    Ocean
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
