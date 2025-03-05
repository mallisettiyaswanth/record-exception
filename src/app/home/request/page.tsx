"use client";

import Steps from "@/components/global/request/components/Steps";
import { useSidebar } from "@/components/ui/sidebar";
import React, { useEffect } from "react";

const Request = () => {
  const { setOpen } = useSidebar();

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <div className="flex flex-1 w-full">
      <Steps />
      <div className="flex-1 p-3">form</div>
    </div>
  );
};

export default Request;
