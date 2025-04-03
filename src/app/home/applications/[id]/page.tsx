"use client";

// import VerticalContent from "@/components/global/stepper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  Download,
  Eye,
  File,
  MoreVertical,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { ApplicationCard } from "../page";
import { useRouter } from "next/navigation";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  return (
    <div className="flex w-full h-full overflow-hidden bg-white rounded-xl relative p-7 flex-col gap-5">
      <header className="w-full flex items-center justify-between sticky top-0">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-0 h-8 w-8">
            <ChevronLeft />
          </button>
          <h1 className="text-xl font-medium text-primary">Permission title</h1>
        </div>
        <div className="flex gap-3">
          <Button className="rounded-full">
            <Check />
            Approve
          </Button>
          <Button variant="destructive" className="rounded-full">
            <X />
            Reject
          </Button>
        </div>
      </header>
      <div className="flex w-full h-full p-1 gap-5">
        <div className="w-3/5 h-full p-3 flex flex-col gap-10">
          <div className="flex-1">
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
              alias, culpa veritatis sapiente quae eius, laborum ad voluptate
              accusantium dignissimos corrupti unde ullam delectus consectetur.
            </p>
          </div>
          <div className="flex text-sm text-gray-600">
            <ul className="flex-[2] flex flex-col gap-3">
              <li className="grid grid-cols-2">
                <span>Section</span>
                <span>IT - B</span>
              </li>
              <li className="grid grid-cols-2">
                <span>Contact no</span>
                <span>+91 9999999999</span>
              </li>
              <li className="grid grid-cols-2">
                <span>Contact no</span>
                <span>+91 9999999999</span>
              </li>
              <li className="grid grid-cols-2">
                <span>Contact no</span>
                <span>+91 9999999999</span>
              </li>
            </ul>
            <div className="flex-1">Custom stepper</div>
          </div>

          <div className="flex flex-col gap-3">
            <header className="p-2 flex items-center justify-between">
              <h1>Applied Students</h1>
              <div className="flex items-center gap-3">
                <Checkbox className="h-6 w-6 rounded-full border-gray-300 hover:border-primary transition-all data-[state=checked]:border-primary" />
              </div>
            </header>

            {Array.from({ length: 2 }).map((_, index: number) => {
              return <CustomSheet key={index} />;
            })}
          </div>
          <div className="w-full flex flex-col gap-3">
            <header>
              <h1>Attachments</h1>
            </header>
            {Array.from({ length: 10 }).map((_, index: number) => {
              return (
                <div
                  className="w-full rounded-2xl bg-sky-100 p-3 flex justify-between items-center border"
                  key={index}
                >
                  <div className="flex gap-3 items-center">
                    <span className="p-1 bg-primary rounded-lg text-white">
                      <File className="text-white" />
                    </span>
                    <div className="flex flex-col">
                      <span>Attachment {index + 1}</span>
                      <p className="text-xs">22pa1a1295</p>
                    </div>
                  </div>
                  <Button className="rounded-full">
                    <Download />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-2/5 flex flex-col gap-10">
          <div className="w-full bg-white rounded-xl border shadow-sm h-screen p-2">
            No letter found
          </div>
          <div className="flex flex-col gap-5">
            <h1>Previous Applications</h1>
            <div className="flex flex-col gap-3">
              {Array.from({ length: 3 }).map((_, index: number) => {
                return <ApplicationCard key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

const CustomSheet = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <div className="flex gap-3 items-center flex-col w-full rounded-3xl border bg-white p-5 shadow-sm">
      <div className="h-full w-full flex items-center justify-between gap-3">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger>
            <div className="flex gap-3 items-center">
              <Avatar>
                <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQGdiAva1mFplg/profile-displayphoto-shrink_800_800/B56ZO9ib01G4Ac-/0/1734051741974?e=1747267200&v=beta&t=zWetf6-SdcsjXwBYRGEfqkmR8KbZT81A1jvCiyQUITM" />
                <AvatarFallback>Y</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <h1 className="text-primary">Mallisetti Yaswanth</h1>
                <p className="text-sm">22pa1a1295</p>
              </div>
            </div>
          </SheetTrigger>
          <SheetContent className="w-2/3 sm:max-w-full">
            <SheetHeader>
              <SheetTitle> Student Details </SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div className="bg-blue-100 rounded-2xl h-fit flex items-center p-1 gap-2">
          <Badge className="flex-1 h-full bg-white rounded-2xl shadow-none text-blue-400 font-medium hover:bg-white">
            12/20/2000
          </Badge>
          <ArrowRight className="h-4 w-4 text-blue-400" />
          <Badge className="flex-1 h-full bg-white rounded-2xl shadow-none font-medium text-blue-400 hover:bg-white">
            12/20/2000
          </Badge>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox className="rounded-full h-6 w-6 border-gray-300 hover:border-primary transition-all data-[state=checked]:border-primary" />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-xl">
              <DropdownMenuItem
                onClick={() => setSheetOpen(true)}
                className="flex items-center gap-2 rounded-xl"
              >
                <Eye />
                Inspect
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="w-full flex items-start flex-col">
        <span>Attendace</span>
        <div className="w-full flex gap-2 items-center">
          <Progress value={50} />
          <span>50%</span>
        </div>
      </div>
    </div>
  );
};
