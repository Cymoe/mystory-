"use client";

import { FormFieldWithExample } from "./FormFieldWithExample";
import { UseFormReturn } from "react-hook-form";
import { QuestionnaireFormData } from "../types";
import { generateRandomExample } from "../utils/examples";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";

export function InterestsSection({ form }: { form: UseFormReturn<QuestionnaireFormData> }) {
  const useExample = () => {
    const randomExample = generateRandomExample();
    form.setValue("interests", randomExample.interests);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Your Interests</h2>
          <p className="text-muted-foreground">Share what excites you and drives you forward.</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={useExample}
          className="flex items-center gap-2"
        >
          <Lightbulb className="w-4 h-4" />
          Use Example
        </Button>
      </div>

      <div className="space-y-4">
        <FormFieldWithExample
          form={form}
          name="interests.passions"
          label="What are you passionate about?"
          placeholder="Tell us what drives you"
          example="I'm deeply passionate about sustainable living and urban gardening. There's something incredible about growing your own food and teaching others how to connect with nature, even in the heart of the city."
          multiline
        />

        <FormFieldWithExample
          form={form}
          name="interests.hobbies"
          label="What are your favorite hobbies?"
          placeholder="Share what you love to do"
          example="Photography captures my heart completely. I love finding beauty in ordinary moments - the way light hits a building, strangers sharing a laugh, or leaves dancing in the wind. It's like collecting little pieces of magic."
          multiline
        />

        <FormFieldWithExample
          form={form}
          name="interests.learningGoal"
          label="What are you currently learning?"
          placeholder="Tell us about your learning journey"
          example="Currently diving into traditional bread making. There's something both scientific and artistic about understanding fermentation, working with different flours, and creating something that brings people together."
          multiline
        />

        <FormFieldWithExample
          form={form}
          name="interests.bucket"
          label="What's on your bucket list?"
          placeholder="Share a dream or goal"
          example="I dream of spending a month in a small Italian village, learning the language, cooking with local grandmothers, and documenting their traditional recipes that have been passed down for generations."
          multiline
        />

        <FormFieldWithExample
          form={form}
          name="interests.achievement"
          label="What's an achievement you're proud of?"
          placeholder="Share something you've accomplished"
          example="Started a community garden project that now feeds 20 families and hosts weekly workshops for kids. Seeing children get excited about growing their own vegetables makes all the hard work worth it."
          multiline
        />
      </div>
    </div>
  );
}