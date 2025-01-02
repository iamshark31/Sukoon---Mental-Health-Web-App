import React from "react";

import { WavyBackground } from "./ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <div>
        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            Sukoon
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Keeping the soul and body healthy,
            <br />Join to discover your inner peace
          </p>
        </WavyBackground>
      </div>
    </div>
  );
}


