"use client";

import Analytics from "@/components/global/Analytics/page";
import WelcomeBanner from "@/components/global/welcome-banner/page";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useClerk, useUser } from "@clerk/nextjs";
import { LogOut, Menu, Plus, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  return (
    <div className="w-full h-full flex rounded-xl flex-col gap-3">
      <header className=" flex items-center justify-between">
        <div className="w-2/6 rounded-full bg-white border-none outline-none items-center flex pl-2 text-gray-500">
          <Search />
          <Input
            className="shadow-none placeholder:font-medium rounded-full outline-none border-none active:border-none focus:border-none ring-0 active:outline-none focus:outline-none active:ring-0 focus:ring-0 focus-visible:ring-0"
            placeholder={`Try searching "something"`}
          />
        </div>
        <div className="flex gap-3 items-center">
          <div className="bg-white rounded-full p-1 z-50">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-3 items-center">
                <Menu className="text-gray-600 h-5 w-5" />
                <Avatar className="h-7 w-7 rounded-2xl">
                  <AvatarImage
                    src={user?.imageUrl}
                    alt={user?.fullName || ""}
                  />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-xl">
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    {user?.imageUrl && (
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage
                          src={user?.imageUrl}
                          alt={user?.fullName || ""}
                        />
                        <AvatarFallback className="rounded-lg">
                          CN
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {user?.fullName}
                      </span>
                      <span className="truncate text-xs">
                        {user?.primaryEmailAddress?.emailAddress}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() =>
                    signOut({
                      redirectUrl: "/",
                    })
                  }
                >
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Button
            size="icon"
            className="rounded-full"
            onClick={() => router.push("/home/request")}
          >
            <Plus />
          </Button>
        </div>
      </header>
      <div className="flex flex-col h-full w-full rounded-xl bg-white flex-1 overflow-hidden">
        {/* <WelcomeBanner /> */}
        <Analytics />
      </div>
    </div>
  );
};

export default page;


