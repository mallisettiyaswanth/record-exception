import { useStepper } from "@/components/StepperContext";
import React from "react";

type Props = {};

const RequestForm = (props: Props) => {
  const { currentStep, next } = useStepper();
  console.log(currentStep);
  return <div onClick={next} className="w-full h-full">{currentStep}</div>;
};

export default RequestForm;
