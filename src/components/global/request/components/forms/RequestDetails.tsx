"use client";

import { EditorRoot, EditorContent, JSONContent } from "novel";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import React, { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = {};

const RequestDetails = (props: Props) => {
  const form = useFormContext();
  const reasons = [
    {
      label: "Health Issues",
      value: "health_issues",
    },
    {
      label: "Family Emergency",
      value: "family_emergency",
    },
    {
      label: "Personal",
      value: "personal",
    },
    {
      label: "Competion",
      value: "competion",
    },
    {
      label: "Academic Work",
      value: "academic_work",
    },
    {
      label: "Internship",
      value: "internship",
    },
    {
      label: "Others",
      value: "others",
    },
  ] as const;
  const editorRef = useRef(null);
  const [content, setContent] = useState<JSONContent | undefined>(undefined);
  return (
    <div className="flex flex-col gap-6 relative">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => {
          return (
            <FormItem className="flex flex-col">
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} placeholder="title" />
              </FormControl>
            </FormItem>
          );
        }}
      />
      <FormField
        control={form.control}
        name="reason"
        render={({ field }) => {
          return (
            <FormItem className="flex flex-col">
              <FormLabel>Reason</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "justify-between text-gray-700",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? reasons.find((reason) => reason.value === field.value)
                            ?.label
                        : "reason"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-full">
                  <Command className="w-full">
                    <CommandInput placeholder="Search reason..." />
                    <CommandList className="w-full">
                      <CommandEmpty>No reason found.</CommandEmpty>
                      <CommandGroup>
                        {reasons.map((reason) => (
                          <CommandItem
                            value={reason.label}
                            key={reason.value}
                            onSelect={() => {
                              form.setValue("reason", reason.value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                reason.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {reason.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          );
        }}
      />
      <FormField
        control={form.control}
        name="type"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Type</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={"leave"}
                className="flex gap-7"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="leave" />
                  </FormControl>
                  <FormLabel className="font-normal">Leave</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="attendance" />
                  </FormControl>
                  <FormLabel className="font-normal">Attendance</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* <CustomMdxEditor editorRef={editorRef} markdown="" /> */}
      {/* <EditorRoot>
        <EditorContent
          initialContent={content}
          onUpdate={({ editor }) => {
            const json = editor.getJSON();
            setContent(json);
          }}
        />
      </EditorRoot> */}
    </div>
  );
};

export default RequestDetails;
