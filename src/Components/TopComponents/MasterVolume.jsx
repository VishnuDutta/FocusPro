import React, { useState, useEffect } from "react";

export default function MasterVolume() {
  const [volume, setVolume] = useState(1);
  const [initialVolumes, setInitialVolumes] = useState([]);

  useEffect(() => {
    const audios = document.querySelectorAll("audio");
    const volumes = Array.from(audios).map((audio) => audio.volume);
    setInitialVolumes(volumes);
  }, []);

  useEffect(() => {
    const audios = document.querySelectorAll("audio");
    audios.forEach((audio, index) => {
      audio.volume = initialVolumes[index] * volume;
    });
    
  }, [volume, initialVolumes]);

  function changeMasterVolume() {
    const audios = document.querySelectorAll("audio");
    const volumes = Array.from(audios).map((audio) => audio.volume);
    setInitialVolumes(volumes);
  }

  return (
    <input
      type="range"
      min={0}
      max={1}
      step={0.1}
      value={volume}
      onChange={(e) => setVolume(e.target.value)}
    />
  );
}
