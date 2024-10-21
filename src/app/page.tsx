'use client'
import Image from "next/image";
import Link from "next/link";
import LiekkiGif from "@/public/liekki.gif"
import AudioPlayer from "@/components/audioPlayer";
import { useState } from "react";


const playAudio = () => {
  console.log('audion pitäis soida')
  new Audio("/../public/squish.mp3").play()
}

export default function Home() {
  const [playSubmitSound, setPlaySubmitSound] = useState(false);
  return (
      <div className="bg-red-700 flex flex-col items-center justify-center min-h-screen text-black"
        onClick={() => setPlaySubmitSound(true)}
      >
        <h1 className="text-7xl">Joutomaa</h1>

        <Link href="/feed">
          <p>SISÄÄN</p>
        </Link>
        <Image
          
          src="/liekki.gif"
          width={500}
          height={500}
          alt="liekki"
        />

      <AudioPlayer
        src="/bruh.mp3"
        play={playSubmitSound}
        onFinish={() => setPlaySubmitSound(false)}
      />
      <button >sound</button>
    </div>
  )
}
 