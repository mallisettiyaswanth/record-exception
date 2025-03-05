import { StepperContext } from "@/context/StepperContext";
import { useContext } from "react";

export const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("useStepper must be used within a StepperProvider");
  }
  return context;
};
