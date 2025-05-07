export default function SingliSoundSpaceAudio({svgElement}) {
  return (
    <li className="relative flex flex-col w-30 h-30 mx-auto group">
        {svgElement}
      <input
        type="range"
        className="w-[100%] hidden group-hover:inline absolute bottom-0"
      />
    </li>
  );
}
