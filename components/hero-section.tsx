"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import { Button } from "./ui/button";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimerComponentProps {
  value: number;
  label: string;
}

const TimerComponent: React.FC<TimerComponentProps> = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center bg-blue-500/10 backdrop-blur-sm rounded-lg p-3 m-2 min-w-[100px] border border-blue-500/20">
    <span className="text-3xl font-bold text-white mb-1">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="text-xs uppercase tracking-wider text-blue-200">
      {label}
    </span>
  </div>
);

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft | null => {
    const targetDate = new Date("2024-11-27");
    const difference = +targetDate - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return null;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="text-white text-xl font-bold bg-blue-500/10 backdrop-blur-sm rounded-lg p-4 mt-6">
        Event has started!
      </div>
    );
  }

  return (
    <div className="mt-8 mb-6">
      <div className="text-center mb-4">
        <span className="text-blue-200 text-sm uppercase tracking-wider">
          Event Starting In
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <TimerComponent value={timeLeft.days} label="days" />
        <TimerComponent value={timeLeft.hours} label="hours" />
        <TimerComponent value={timeLeft.minutes} label="minutes" />
        <TimerComponent value={timeLeft.seconds} label="seconds" />
      </div>
    </div>
  );
};

interface ImagesSliderDemoProps {
  className?: string;
}

export const ImagesSliderDemo: React.FC<ImagesSliderDemoProps> = ({
  className,
}) => {
  const images: string[] = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <ImagesSlider
      className={`h-[40rem] bg-black ${className || ""}`}
      images={images}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center px-4"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <span className="text-transparent bg-gradient-to-b bg-clip-text from-blue-900 to-blue-500">
            EsenNet
          </span>{" "}
          <br />
          Networking for Your Future
        </motion.p>

        <Countdown />

        <Button
          className="px-6 py-3 backdrop-blur-sm border bg-blue-300/10 border-blue-500/20 
                     text-white mx-auto text-center rounded-full relative mt-4 
                     hover:bg-blue-400/20 transition-all duration-300 hover:scale-105"
        >
          <span className="text-lg">Register now →</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-500 to-transparent" />
        </Button>
      </motion.div>
    </ImagesSlider>
  );
};

export default ImagesSliderDemo;