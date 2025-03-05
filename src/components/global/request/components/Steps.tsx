import useCustomStepper from "@/components/Stepper";
import React, { useEffect } from "react";

type Props = {};

const Steps = (props: Props) => {
  const steps = [
    {
      name: "Request Overview",
      bio: "Summarize your request type and reason.",
    },
    {
      name: "Request Duration",
      bio: "Select the required timeframe.",
    },
    {
      name: "Applicant Details",
      bio: "Enter student details.",
    },
    {
      name: "Faculty Details",
      bio: "Set faculty approval requirements.",
    },
    {
      name: "Contact & Responsibility",
      bio: "Provide a responsible contact.",
    },
    {
      name: "Preview",
      bio: "Review before submitting.",
    },
  ];

  const { JSX, next, prev } = useCustomStepper({ steps });

  return (
    <div className="w-64 border-r bg-gray-50 p-3 py-16 flex flex-col">
      {JSX}
    </div>
  );
};

export default Steps;
