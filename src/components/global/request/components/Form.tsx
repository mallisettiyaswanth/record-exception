import { useStepper } from "@/hooks/useStepper";
import React from "react";
import RequestDetails from "./forms/RequestDetails";
import ApplicantDetails from "./forms/ApplicantDetails";
import FacultyDetails from "./forms/FacultyDetails";
import ContactDetails from "./forms/ContactDetails";
import Preview from "./forms/Preview";

type Props = {};

const StepperForm = ({ currentStep }: { currentStep: number }) => {
  switch (currentStep) {
    case 0:
      return <RequestDetails />;
    case 1:
      return <ApplicantDetails />;
    case 2:
      return <FacultyDetails />;
    case 3:
      return <ContactDetails />;
    case 4:
      return <Preview />;
    default:
      return <RequestDetails />;
  }
};

const RequestForm = (props: Props) => {
  const { currentStep, next } = useStepper();
  console.log(currentStep);

  return (
    <div onClick={next} className="w-full h-full">
      <StepperForm currentStep={currentStep} />
    </div>
  );
};

export default RequestForm;
