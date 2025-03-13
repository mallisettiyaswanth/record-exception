"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ArrowRight,
  ArrowRightLeft,
  Check,
  Cross,
  CrossIcon,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex w-full h-full overflow-hidden bg-white rounded-xl relative p-10 flex-col gap-10">
      <h1 className="text-4xl font-medium">Applications</h1>
      <div className="grid grid-cols-3 gap-8 p-5">
        {Array.from({ length: 10 }).map((_, index: number) => {
          return <ApplicationCard key={index} />;
        })}
      </div>
    </div>
  );
};

const ApplicationCard = () => {
  const router = useRouter();
  return (
    <Card className="rounded-xl shadow-sm cursor-pointer p-5 gap-8 flex flex-col group bg-primary/5 transition duration-300 hover:bg-primary/10">
      <div>
        <p className="text-xs text-blue-400">22pa1a1295</p>
        <h1 className="font-medium text-xl text-primary group-hover:text-blue-600">
          Mallisetti Yaswanth
        </h1>
        <p className="text-sm text-blue-400">IT - Section A</p>
      </div>
      <div className="flex justify-between items-center gap-8">
        <div className="w-full bg-blue-100 rounded-2xl flex-1 h-full flex items-center p-1 gap-2">
          <Badge className="flex-1 h-full bg-white rounded-2xl shadow-none text-blue-400 hover:bg-white">
            12/20/2000
          </Badge>
          <ArrowRightLeft className="h-4 w-4 text-blue-400" />
          <Badge className="flex-1 h-full bg-white rounded-2xl shadow-none text-blue-400 hover:bg-white">
            12/20/2000
          </Badge>
        </div>

        <Button
          onClick={() => router.push("/home/applications/1")}
          className="self-end justify-self-end w-fit shadow-none rounded-2xl group-hover:bg-blue-500 group-hover:text-white  items-center bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
        >
          Review
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </Button>
      </div>
    </Card>
  );
};


export default page;
