import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { useStepper } from "@/hooks/useStepper";
import { Trash } from "lucide-react";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { toast } from "sonner";
type Props = {};

const ApplicantDetails = (props: Props) => {
  const form = useFormContext();
  const { next } = useStepper();

  console.log(form.formState.errors);
  const request_for = form.watch("holder");
  const [students, setStudents] = useState([{ id: Date.now() }]);

  const handleAddStudent = () => {
    if (students.length < 5) {
      setStudents([...students, { id: Date.now() }]);
    } else {
      toast.error("You can only add upto 5 students");
    }
  };

  const handleRemoveStudent = (id: number, index: number) => {
    form.unregister(`students[${index}].name`);
    form.unregister(`students[${index}].reg_no`);
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleClick = async () => {
    const isValid = await form.trigger();
    if (isValid) next();
  };

  return (
    <div className="flex flex-col gap-6 relative pb-24">
      <FormField
        control={form.control}
        name="holder"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Permission for</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={(e) => {
                  setStudents([{ id: Date.now() }]);
                  form.reset({
                    holder: e,
                  });
                  field.onChange(e);
                }}
                defaultValue={"individual"}
                className="flex gap-7"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="individual" />
                  </FormControl>
                  <FormLabel className="font-normal">Individual</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="group" />
                  </FormControl>
                  <FormLabel className="font-normal">Group</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {students.map((student, index) => (
        <Card key={student.id}>
          <CardHeader className="flex justify-between items-center flex-row">
            <div className="flex items-center gap-10">
              <CardTitle className="text-gray-600 font-normal">
                Student {index + 1}
              </CardTitle>
              {students.length > 1 && (
                <FormField
                  control={form.control}
                  name={`student[${index}].date`}
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg gap-3">
                      <FormLabel>Individual dates</FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
            </div>
            {students.length > 1 && (
              <Button
                variant="destructive"
                size="icon"
                onClick={() => handleRemoveStudent(student.id, index)}
              >
                <Trash />
              </Button>
            )}
          </CardHeader>
          <CardContent className="flex flex-row gap-3">
            <FormField
              control={form.control}
              name={`students[${index}].name`}
              render={({ field }) => (
                <FormItem className="flex flex-col flex-1">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`students[${index}].reg_no`}
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Register No</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Register No" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
      ))}
      <div className="flex justify-between">
        {request_for === "group" && (
          <Button
            type="button"
            variant="secondary"
            onClick={handleAddStudent}
            className="max-w-fit"
          >
            Add Student
          </Button>
        )}
        <Button className="ml-auto" onClick={handleClick}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ApplicantDetails;
