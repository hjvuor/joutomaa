import React, { useRef, useEffect } from "react";


export default function AudioPlayer(props: {
  src: string
  play: boolean
  onFinish: () => void

}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (props.play) {
      playAudio();
    }
  }, [props.play]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleAudioEnded = () => {
    // Call the callback function when the audio ends
    if (props.onFinish) {
      props.onFinish();
    }
  };

  return (
    <div>
      <audio ref={audioRef} controls className="hidden" onEnded={handleAudioEnded}>
        <source src={props.src} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}