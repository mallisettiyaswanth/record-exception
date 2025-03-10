"use client";

import { GridBackgroundDemo } from "@/components/global/BoxBackGround";
import Loading from "@/components/global/Loading";
import { Button } from "@/components/ui/button";
import { useSignIn } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

type Props = {};

const SignInPage = (props: Props) => {
  const { isLoaded, signIn } = useSignIn();

  const handleGoogleLogin = async () => {
    try {
      await signIn?.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sign-in",
        redirectUrlComplete: "/",
      });
    } catch (err) {
      console.log(err);
      toast.error("error Loggin in");
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="flex w-7/12 relative text-white overflow-hidden">
        <GridBackgroundDemo className="flex-1" />
        {/* <SiMaildotru className="opacity-20 absolute h-96 w-96 -bottom-24 -right-20 -rotate-45" /> */}
        <div className="w-full h-full flex p-5 flex-col">
          <div className="flex flex-col gap-5 w-full h-fit p-8 py-16">
            <h1 className="text-7xl font-semibold w-2/3">
              Permission Manager.
            </h1>
            <p className="text-white/50 w-2/5">
              Make your permission management easier with us.
            </p>
          </div>
          <div className="w-full h-full"></div>
        </div>
      </div>
      <div className="w-5/12 flex flex-col p-8">
        {!isLoaded ? (
          <div className="w-full h-full flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          <>
            <div className="h-fit ml-auto flex flex-col text-sm items-center justify-center">
              <p className="text-gray-500">New here?</p>
              <Link
                href="/auth/sign-up"
                className="text-blue-600 hover:text-blue-500 hover:underline hover:decoration-blue-500"
              >
                sign up
              </Link>
            </div>
            <div className="items-center flex-col py-32 px-10">
              <div className="flex flex-col gap-16">
                <div className="flex gap-1 flex-col">
                  <h1 className="font-semibold text-3xl">
                    Sign in to{" "}
                    <span className="text-primary">Permission Manager</span>
                  </h1>
                  <p className="text-sm text-center text-gray-500">
                    we suggest using your college email address
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="text-primary"
                  onClick={handleGoogleLogin}
                >
                  Sign In With Google
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
