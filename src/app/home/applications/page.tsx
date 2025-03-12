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
import { ArrowRight, ArrowRightLeft } from "lucide-react";
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
  return (
    <Card className="rounded-xl shadow-sm cursor-pointer p-5 gap-8 flex flex-col group bg-primary/5 transition duration-300 hover:bg-primary/10">
      <div>
        <p className="text-xs text-blue-400">22pa1a1295</p>
        <h1 className="font-semibold text-xl text-primary group-hover:text-blue-600">
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
        <Dialog>
          <DialogTrigger>
            <span className=" inline-flex justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 self-end justify-self-end w-fit shadow-none rounded-2xl group-hover:bg-blue-500 group-hover:text-white  items-center bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2">
              Review
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </span>
          </DialogTrigger>
          <DialogContent className="max-w-full h-full">
            <DialogHeader className="h-0 hidden">
              <DialogTitle></DialogTitle>
            </DialogHeader>
            <ReviewApplicationDialog />
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
};

const ReviewApplicationDialog = () => {
  return (
    <div className="flex w-full h-full p-1 gap-5">
      <div className="w-full h-full flex-1 p-3">
        <h1 className="text-primary font-semibold text-4xl">
          Permission title
        </h1>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default page;
