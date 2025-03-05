import { Card } from "@/components/ui/card";
import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  steps: { name: string; bio: string }[];
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

const Stepper = ({ steps, currentStep, setCurrentStep }: Props) => {
  return steps.map((step, index) => {
    return (
      <>
        <div
          key={index}
          className={cn("flex flex-col gap-1 cursor-pointer p-2 shadow-none", currentStep < index && "cursor-not-allowed")}
          onClick={() => currentStep >= index && currentStep !== 0 && setCurrentStep(index - 1)}
        >
          <span
            className={cn(
              "leading-5",
              currentStep < index ? "text-gray-500" : "font-semibold"
            )}
          >
            {step.name}
          </span>
          <span className="text-xs text-gray-500">{step.bio}</span>
        </div>
        {index !== steps.length - 1 && (
          <motion.div
            initial={{
              backgroundColor: currentStep > index ? "#D1D5DB" : "#2563EB",
            }}
            animate={{
              backgroundColor: currentStep > index ? "#2563EB" : "#D1D5DB",
            }}
            transition={{
              ease: "easeInOut",
              delay: currentStep > index ? 0.1 * index : 0,
            }}
            className={`h-6 w-1 ml-5 rounded-md ${
              currentStep > index ? "bg-primary" : "bg-gray-200"
            }`}
          />
        )}
      </>
    );
  });
};

type StepperProps = {
  steps: { name: string; bio: string }[];
};

type StepperReturnType = {
  JSX: React.ReactNode;
  prev: () => void;
  next: () => void;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

const useCustomStepper = ({ steps }: StepperProps): StepperReturnType => {
  const [currentStep, setCurrentStep] = React.useState(0);

  const next = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return {
    JSX: <Stepper {...{ steps, currentStep, setCurrentStep }} />,
    prev,
    next,
    currentStep,
    setCurrentStep,
  };
};

export default useCustomStepper;
