"use client";

import React from "react";
import { Calendar, MessageSquare } from "lucide-react";
import { Boxes } from "./ui/background-boxes";

// Note: Removed framer-motion import since we want to stick to core functionality
// Note: Removed Boxes component since it wasn't provided

interface StatBubbleProps {
  count: string;
  label: string;
  className: string;
}

const StatBubble = ({ count, label, className }: StatBubbleProps) => (
  <div
    className={`rounded-full flex flex-col items-center justify-center ${className}`}
  >
    <span className="text-3xl font-bold text-white">{count}</span>
    <span className="text-sm text-white">{label}</span>
  </div>
);

export default function OventExpoBanner() {
  return (
    <div className=" relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg py-20">
      <div className="absolute inset-0 w-full h-full bg-slate-900 opacity-50" />
      <Boxes />
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Left Content Section */}
          <div className="flex flex-col flex-1">
            <span className="text-cyan-300 mb-2 text-sm font-semibold">
              WHY JOIN OVENT
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join us at 110th
              <br />
              oVent Expo.
            </h1>
            <p className="text-yellow-300 text-xl mb-8">
              Shift your perspective on digital business
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start space-x-4">
                <Calendar className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-300">
                  Study in a newly-refreshed campus located in the heart of
                  Berlin, Europe s start-up capital.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <MessageSquare className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-300">
                  Study in a newly-refreshed campus located in the heart of
                  Berlin, Europe s start-up capital.
                </p>
              </div>
            </div>
          </div>

          {/* Right Stats Section */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <StatBubble
              count="20+"
              label="Sponsors"
              className="w-32 h-32 bg-purple-500"
            />
            <StatBubble
              count="100+"
              label="Cool Speakers"
              className="w-40 h-40 bg-green-500"
            />
            <StatBubble
              count="5+"
              label="Happy People"
              className="w-28 h-28 bg-cyan-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
