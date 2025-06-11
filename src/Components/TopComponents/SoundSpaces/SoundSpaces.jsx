export default function SingliSoundSpaceLi({
  src,
  id,
  mixPlayingStatus,
  name,
  svgElement,
  callBack,
}) {
  return (
    <li
      className={`relative flex flex-col items-center h-40 w-30 mx-auto my-auto lg:h-full lg:w-full cursor-pointer group`}
      id={id}
      onClick={callBack}
    >
      <div className="relative h-full w-full">
        <img src={src} alt="" className="w-full h-full rounded-sm" />
        {mixPlayingStatus ? (
          <img
            src="/src/assets/Animations/playingAnimation.gif"
            alt=""
            className="h-10 w-20 absolute inset-0 m-auto"
          />
        ) : (
          svgElement
        )}
      </div>
      <div className="absolute right-1 bottom-9 hidden group-hover:inline hover:bg-amber-50/50 p-1 rounded-full">
        <button>
          {mixPlayingStatus ? (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7"
          >
            <path
              fillRule="evenodd"
              d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
              clipRule="evenodd"
            />
          </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
      <p className="text-lg font-semibold text-left mt-1 w-full">{name}</p>
    </li>
  );
}
