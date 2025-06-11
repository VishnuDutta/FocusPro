export default function MasterVolume({ masterVolume, setMasterVolume }) {
  return (
    <input
      type="range"
      min={0}
      max={1}
      step={0.01}
      value={masterVolume}
      onChange={(e) => setMasterVolume(parseFloat(e.target.value))}
    />
  );
}
