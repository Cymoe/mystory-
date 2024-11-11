"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { ExampleButton } from "./ExampleButton";
import { QuestionnaireFormData } from "../types";
import { getRandomExample } from "../utils/examples";

interface FormFieldWithExampleProps {
  form: UseFormReturn<QuestionnaireFormData>;
  name: string;
  label: string;
  placeholder: string;
  example: string;
  multiline?: boolean;
}

export function FormFieldWithExample({
  form,
  name,
  label,
  placeholder,
  example,
  multiline = false,
}: FormFieldWithExampleProps) {
  const Component = multiline ? Textarea : Input;
  const componentProps = multiline ? { className: "min-h-[100px]" } : {};

  const handleShowExample = () => {
    // Get a random example based on the field name
    const randomExample = getRandomExample(name);
    form.setValue(name as any, randomExample);
  };

  return (
    <FormField
      control={form.control}
      name={name as any}
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center justify-between">
            <FormLabel>{label}</FormLabel>
            <ExampleButton
              example={example}
              onShow={handleShowExample}
            />
          </div>
          <FormControl>
            <Component placeholder={placeholder} {...field} {...componentProps} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}