"use client"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";

type Props = {};

const Onboarding = (props: Props) => {

    // useEffect(() => {

    //     // document.body.style.setProperty("--first-color", firstColor);
    //     document.body.style.setProperty("--second-color", "221, 74, 255");
    //     // document.body.style.setProperty("--third-color", thirdColor);
    //     // document.body.style.setProperty("--fourth-color", fourthColor);
    //     // document.body.style.setProperty("--fifth-color", fifthColor);
    //     // document.body.style.setProperty("--pointer-color", pointerColor);
    //     document.body.style.setProperty("--size", "80%");
    //     document.body.style.setProperty("--blending-value", "hard-light");
    //   }, []);

  return (
    <div className="overflow-hidden relative h-screen w-screen">
      <div
        className={cn(
          `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
          `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] -top-96 -left-[700px]`,
          `opacity-100 -z-50`
        )}
      ></div>

    </div>
  );
};

export default Onboarding;
