import React from "react";

export function GridBackgroundDemo({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-primary  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center w-7/12">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        {children}
      </p>
    </div>
  );
}
