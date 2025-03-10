import React from "react";

export function GridBackgroundDemo({
  className,
}: {
  children?: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={`bg-primary dark:bg-grid-white/[0.1] bg-grid-black/[0.1] absolute h-full w-full -z-50  ${className}`}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>
    </div>
  );
}
