"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import musicImage from "@/public/audio/music_cover.jpg";
import Image from "next/image";
import { gsap, Power2, Power3 } from "gsap";
import Card from "../ui/card";

export default function WaveformCard() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { theme } = useTheme();

  // Store animation state in refs to persist across theme changes
  const animationStateRef = useRef({
    stretch: 10,
    sinHeight: 0,
    power: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const audio = audioRef.current;
    if (!canvas || !audio) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const opt = {
      width: 380,
      height: 200,
      midY: 200 / 1.4,
      points: 80,
      stretch: animationStateRef.current.stretch,
      sinHeight: animationStateRef.current.sinHeight,
      speed: -0.1,
      strokeColor: theme === "dark" ? "white" : "black",
      strokeWidth: 3,
      power: animationStateRef.current.power,
    };

    canvas.width = opt.width * 2;
    canvas.height = opt.height * 2;
    canvas.style.width = opt.width + "px";
    canvas.style.height = opt.height + "px";

    ctx.scale(2, 2);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    let time = 0;

    const render = () => {
      requestAnimationFrame(render);
      ctx.clearRect(0, 0, opt.width, opt.height);
      time += 1;
      ctx.strokeStyle = opt.strokeColor;
      ctx.lineWidth = opt.strokeWidth;
      ctx.beginPath();
      let increment = 0;

      for (let i = 0; i <= opt.points; i++) {
        if (i < opt.points / 2) {
          increment += 0.1;
        } else {
          increment += -0.1;
        }

        const x = (opt.width / opt.points) * i;
        const y =
          opt.midY +
          Math.sin(time * opt.speed + i / opt.stretch) *
          opt.sinHeight *
          increment;
        ctx.lineTo(x, y);
      }

      ctx.stroke();
    };

    render();

    const handleClick = () => {
      opt.power = !opt.power;
      animationStateRef.current.power = opt.power;
      setIsPlaying(opt.power);

      if (opt.power) {
        audio.play();
        gsap.to(opt, {
          sinHeight: 10,
          stretch: 1.9,
          ease: Power2.easeInOut,
          duration: 1,
          onUpdate: () => {
            // Update the ref to persist state
            animationStateRef.current.sinHeight = opt.sinHeight;
            animationStateRef.current.stretch = opt.stretch;
          }
        });
      } else {
        audio.pause();
        gsap.to(opt, {
          sinHeight: 0,
          stretch: 10,
          ease: Power3.easeOut,
          duration: 1,
          onUpdate: () => {
            // Update the ref to persist state
            animationStateRef.current.sinHeight = opt.sinHeight;
            animationStateRef.current.stretch = opt.stretch;
          }
        });
      }
    };

    canvas.addEventListener("click", handleClick);
    return () => canvas.removeEventListener("click", handleClick);
  }, [theme]); // Only depend on theme, not isPlaying

  return (
    <Card className="relative overflow-hidden">
      {/* Background image */}
      <Image
        src={musicImage}
        alt="Music background"
        fill
        className="absolute inset-0 object-cover opacity-70"
        draggable={false}
        priority
      />

      {/* Canvas overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 cursor-pointer"
      />

      {/* Text overlay */}
    
      <div className="absolute inset-0 z-20 flex items-end justify-center pb-4 pointer-events-none">
        <p
          className="text-sm font-medium bg-black/5 px-3 py-1 rounded"
          style={{
            color: theme === "dark" ? "#fff" : "#222"
          }}
        >
          {`Tap `}
          <span style={{ color: theme === "dark" ? "#fff" : "#222" }}>
            {theme === "dark" ? "white" : "black"}
          </span>
          {` line to ${isPlaying ? "pause 🎵" : "play ⏸️"}`}
        </p>
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} src="/audio/audio.mp3" />
    </Card>
  );
}