import { SignUp } from "@clerk/nextjs";
import React from "react";

type Props = {};

const SignUpPage = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
