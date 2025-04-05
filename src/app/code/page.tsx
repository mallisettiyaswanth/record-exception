import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowDown,
  ArrowLeft,
  BookCheck,
  CheckCheck,
  ChevronDown,
  Lightbulb,
  Notebook,
  Pin,
  Sparkle,
  Timer,
} from "lucide-react";
import React from "react";
import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

type Props = {};

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

const CodingPage = (props: Props) => {
  return (
    <main
      className={cn(
        "w-full h-screen flex flex-col bg-black/95 text-white",
        space_grotesk.className
      )}
    >
      <nav className="flex justify-between p-3 px-5 items-center">
        <ArrowLeft className="font-thin" />
        <div className="flex gap-3 items-center">
          <Button className="p-3 bg-emerald-700 rounded-md hover:bg-emerald-800 font-normal">
            <CheckCheck />
            Submit
          </Button>
          <Button className="bg-zinc-800 hover:bg-zinc-700 rounded-md p-3 font-normal">
            <Lightbulb />
            Hint
          </Button>
          <Button className="bg-zinc-800 hover:bg-zinc-700 rounded-md p-3 font-normal">
            <Timer />
            Hint
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-zinc-800 hover:bg-zinc-700 rounded-md p-3 font-normal">
                Python
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
      </nav>
      <div className="flex gap-3 px-3 h-full">
        <ResizablePanelGroup direction="horizontal" className="flex-1 flex">
          <ResizablePanel minSize={30} maxSize={50} defaultSize={35}>
            <div className="flex-[2] w-full h-full border border-gray-700 bg-zinc-900 rounded-md overflow-hidden">
              <Tabs defaultValue="account" className="w-full p-0">
                <TabsList className="bg-transparent text-white/90 font-normal p-0 h-full w-full border-b border-gray-700 justify-start">
                  <TabsTrigger
                    value="description"
                    className="flex gap-3 items-center border-r border-gray-700 hover:bg-zinc-800 h-full rounded-none py-2 data-[state=active]:border-t-2 data-[state=active]:border-indigo-800 data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:border-r-gray-700 data-[state=active]:bg-zinc-800"
                  >
                    <Notebook className="w-4 h-4" />
                    <span>Description</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="solution"
                    className="flex gap-3 items-center border-r border-gray-700 hover:bg-zinc-800 h-full rounded-none py-2 data-[state=active]:border-t-2 data-[state=active]:border-indigo-800 data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:border-r-gray-700 data-[state=active]:bg-zinc-800"
                  >
                    <BookCheck className="w-4 h-4" />
                    <span>Solution</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="Submission"
                    className="flex gap-3 items-center border-r border-gray-700 hover:bg-zinc-800 h-full rounded-none py-2 data-[state=active]:border-t-2 data-[state=active]:border-indigo-800 data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:border-r-gray-700 data-[state=active]:bg-zinc-800"
                  >
                    <Pin className="w-4 h-4" />
                    <span>Submission</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="p-3">
                  <h1 className="font-medium text-2xl">Palindrome Number</h1>
                </TabsContent>
                <TabsContent value="solution" className="p-3">
                  Solution
                </TabsContent>
                <TabsContent value="Submission" className="p-3">
                  Submission
                </TabsContent>
              </Tabs>
            </div>
          </ResizablePanel>
          <ResizableHandle
            withHandle
            className="bg-transparent rounded-lg hover:bg-gray-700 transition-colors w-1"
          />
          <ResizablePanel className="pl-2 flex">
            <div className="flex-[3] flex flex-col gap-3">
              <ResizablePanelGroup direction="vertical" className="flex-1 flex">
                <ResizablePanel minSize={40} maxSize={100} defaultSize={70} className="mb-3">
                  <div className="border-gray-700 bg-zinc-900 rounded-md flex-1 border h-full">
                    First
                  </div>
                </ResizablePanel>
                <ResizableHandle
                  withHandle
                  className="bg-transparent rounded-lg hover:bg-gray-700 transition-colors h-1"
                />
                <ResizablePanel maxSize={60}>
                  <div className="border-gray-700 bg-zinc-900 rounded-md flex-1 border h-full">
                    Second
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </main>
  );
};

export default CodingPage;
