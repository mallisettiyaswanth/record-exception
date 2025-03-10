import { useUser } from '@clerk/nextjs';
import { ArrowRight, Shield, Sparkles, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

type Props = {}

const WelcomeBanner = (props: Props) => {
    const { user, isLoaded }  = useUser();
  return (
    <div className="overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 p-8">
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-yellow-300" />
            <span className="text-sm font-medium text-blue-100 flex gap-2 items-center">
              Hello {isLoaded ? user?.fullName?.split(" ").map((n) => n.at(0)?.toUpperCase() + n.slice(1)).join(" ") + "!": <div className='w-20 rounded-full bg-blue-400 animate-pulse h-4' />}
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Welcome!
          </h1>
          <p className="max-w-2xl text-blue-100">
            Effortlessly manage user roles and permissions with a seamless,
            intuitive interface. Ensure secure access control, streamline
            workflows, and enhance productivity with powerful permission
            management tools.
          </p>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white">
              <Shield className="h-8 w-8" />
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white">
              <Users className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner