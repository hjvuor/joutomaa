"use client";
import Image from "next/image";
import Link from "next/link";
//import LiekkiGif from "@/../public/liekki.gif";
import AudioPlayer from "@/components/audioPlayer";
import { useState } from "react";
import Feissi from "@/../public/hUrjuus.png";

import {Rubik_Glitch} from "next/font/google"
const font = Rubik_Glitch({weight:["400"], subsets: ["latin"] });

/* const LiekkiComponent = () => {
  return (
    <div>
      <Image
        className="fixed -bottom-5"
        style={{
          filter: "invert(75%)",
        }}
        src={LiekkiGif}
        width={500}
        height={200}
        alt="liekki"
      />
      <Image
        className="fixed -top-5 rotate-180"
        style={{
          filter: "invert(75%)",
        }}
        src={LiekkiGif}
        width={500}
        height={200}
        alt="liekki"
      />
    </div>
  )
} */

export default function Home() {
  const [playSubmitSound, setPlaySubmitSound] = useState(false);
  return (
    <div
      className="h-screen flex items-center justify-center text-green-600 max-w-full"
      onClick={() => setPlaySubmitSound(true)}
    >
      <div className="h-2/4 min-h-full  bg-red-100"></div>
      <Link className="justify-items-center" href="/feed">
        
        <h1 className={`text-6xl italic mb-8 ${font.className}`}>JOUTOMAA</h1>
        <Image
          className="animate-ping"
          src={Feissi}
          width={100}
          height={100}
          alt="liekki"
        />
      </Link>
      
      

      <AudioPlayer
        src="/bruh.mp3"
        play={playSubmitSound}
        onFinish={() => setPlaySubmitSound(false)}
      />
    </div>
  );
}
