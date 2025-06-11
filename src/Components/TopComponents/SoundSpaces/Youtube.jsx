import React, { useRef } from "react";
import YouTube from "react-youtube";

function Youtube({ videoUrl , videoPlayHandle , playingStatus }) {
  const playerRef = useRef(null);

  const handleReady = (event) => {
    playerRef.current = event.target;
  };

  const handlePlay = () => {
    videoPlayHandle(playerRef.current);
  }

  return (
    <div style={{ display: playingStatus ? "block" : "none" }}>
      <YouTube
        videoId={videoUrl}
        onReady={handleReady}
        onPlay={handlePlay}
        title=""
        opts={{
          playerVars: {
            autoplay: 0,
            controls: 0,
            modestbranding: 1,
            rel: 0,
          },
        }}
      />
    </div>
  );
}

export default Youtube;
