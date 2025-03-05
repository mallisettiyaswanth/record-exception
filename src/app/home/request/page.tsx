"use client";

import RequestForm from "@/components/global/request/components/Form";
import Stepper from "@/components/Stepper";
import { StepperProvider } from "@/context/StepperContext";
import { useSidebar } from "@/components/ui/sidebar";
import React, { useEffect } from "react";

const Request = () => {
  const { setOpen, ...props } = useSidebar();

  useEffect(() => {
    setOpen(false);
  }, []);

  const steps = [
    {
      name: "Request Details",
      bio: "Summarize your request type and reason.",
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

  return (
    <StepperProvider steps={steps}>
      <div className="flex flex-1 w-full">
        <div className="w-64 border-r bg-gray-50 p-3 py-20 flex flex-col">
          <Stepper />
        </div>
        <div className="flex-1 p-10">
          <RequestForm />
        </div>
      </div>
    </StepperProvider>
  );
};

export default Request;
