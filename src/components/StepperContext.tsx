import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type Step = {
  name: string;
  bio: string;
};

type StepperContextType = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  next: () => void;
  prev: () => void;
  steps: Step[];
};

const StepperContext = createContext<StepperContextType | undefined>(undefined);

export const StepperProvider = ({
  children,
  steps,
}: {
  children: React.ReactNode;
  steps: Step[];
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));

  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <StepperContext.Provider
      value={{ currentStep, setCurrentStep, next, prev, steps }}
    >
      {children}
    </StepperContext.Provider>
  );
};

export const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("useStepper must be used within a StepperProvider");
  }
  return context;
};
