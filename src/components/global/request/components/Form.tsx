import { useStepper } from "@/hooks/useStepper";
import React from "react";
import RequestDetails from "./forms/RequestDetails";
import ApplicantDetails from "./forms/ApplicantDetails";
import FacultyDetails from "./forms/FacultyDetails";
import ContactDetails from "./forms/ContactDetails";
import Preview from "./forms/Preview";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {};

const StepperForm = ({ currentStep }: { currentStep: number }) => {
  switch (currentStep) {
    case 0:
      return <RequestDetails />;
    case 1:
      return <ApplicantDetails />;
    case 2:
      return <FacultyDetails />;
    case 3:
      return <ContactDetails />;
    case 4:
      return <Preview />;
    default:
      return <RequestDetails />;
  }
};

const permission_schema = z.object({
  title: z.string().min(1, "Title is required"),
  type: z.enum(["leave", "attendance"]),
  holder: z.enum(["individual", "group"]),
  students: z
    .array(
      z.object({
        name: z.string().min(1, "Name is required"),
        reg_no: z.string().min(1, "Registration number is required"),
        attendance_percentage: z.string().optional(),
        date_range: z.tuple([z.date(), z.date()]).optional(),
        individual_from_date: z.date().optional(),
        individual_to_date: z.date().optional(),
      })
    )
    .min(1, "At least one student is required for individual or group holder"),
  from_date: z.date(),
  to_date: z.date(),
  reason: z.string().min(1, "Reason for request is required"),
  letter: z.string(),
  attachments: z.any().optional(),
  section: z.string().min(1, "Section is required"),
  department: z.string().min(1, "Department is required"),
  contact: z.object({
    phone: z.string().min(10, "Valid phone number required"),
    email: z.string().email("Valid email required"),
  }),
  class_representative_contact: z
    .string()
    .min(10, "Valid class representative contact number required"),
  faculty: z
    .object({
      name: z.string().optional(),
      email: z.string().email("Valid faculty email required"),
    })
    .optional(),
});

const RequestForm = (props: Props) => {
  const { currentStep } = useStepper();

  const getStepSchema = (step: number) => {
    const stepWiseSchema = [
      ["title", "reason", "letter", "type"],
      ["holder", "students", "from_date", "to_date"],
      ["faculty"],
      ["contact", "class_representative_contact", "department", "section"],
    ] as const;

    return permission_schema.pick(
      stepWiseSchema[step].reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {} as Record<(typeof stepWiseSchema)[number][number], true>)
    );
  };

  const form = useForm({
    resolver: zodResolver(getStepSchema(currentStep)),
    mode: "onBlur",
    defaultValues: {
      title: "",
      reason: "",
      letter: "",
      type: "leave" as "leave" | "attendance",
      holder: "individual" as "individual" | "group",
      students: [{ name: "", reg_no: "" }],
      from_date: new Date(),
      to_date: new Date(),
      faculty: { name: "", email: "" },
      contact: { phone: "", email: "" },
      class_representative_contact: "",
      department: "",
      section: "",
    },
  });

  return (
    <FormProvider {...form}>
      <form
        className="w-full h-full relative"
        onSubmit={form.handleSubmit(() => {})}
      >
        <StepperForm currentStep={currentStep} />
      </form>
    </FormProvider>
  );
};

export default RequestForm;
