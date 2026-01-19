import { useRef, useState } from "react";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="flex items-center gap-4 my-4">
      <button
        onClick={toggle}
        className="px-4 py-2 bg-pink-500 text-white rounded-lg"
      >
        {playing ? "Pause" : "Play"}
      </button>
      <audio ref={audioRef} src={src} />
    </div>
  );
};

export default AudioPlayer;
