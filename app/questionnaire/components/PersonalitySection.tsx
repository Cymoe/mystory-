"use client";

import { FormFieldWithExample } from "./FormFieldWithExample";
import { UseFormReturn } from "react-hook-form";
import { QuestionnaireFormData } from "../types";
import { generateRandomExample } from "../utils/examples";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";

export function PersonalitySection({ form }: { form: UseFormReturn<QuestionnaireFormData> }) {
  const useExample = () => {
    const randomExample = generateRandomExample();
    form.setValue("personality", randomExample.personality);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Your Personality</h2>
          <p className="text-muted-foreground">Help others understand what makes you unique.</p>
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
          name="personality.type"
          label="How would you describe your personality?"
          placeholder="e.g., thoughtful, adventurous, creative"
          example="thoughtful"
        />

        <FormFieldWithExample
          form={form}
          name="personality.uniqueTrait"
          label="What's something unique about you?"
          placeholder="Share something that makes you stand out"
          example="I have this uncanny ability to remember song lyrics from any decade, which makes me an excellent road trip DJ and karaoke partner. Friends say I'm like a walking music encyclopedia with a story for every song."
          multiline
        />

        <FormFieldWithExample
          form={form}
          name="personality.morningPerson"
          label="Are you a morning person?"
          placeholder="Tell us about your daily rhythm"
          example="Definitely a morning person! I love catching the sunrise with a hot cup of coffee, using those quiet hours for creativity and reflection. There's something magical about having the world to yourself before everyone wakes up."
          multiline
        />

        <FormFieldWithExample
          form={form}
          name="personality.perfectDay"
          label="Describe your perfect day"
          placeholder="What would your ideal day look like?"
          example="Starting with a sunrise hike, followed by brunch at a local café, spending the afternoon learning pottery at a workshop, and ending with a cozy dinner party with close friends, sharing stories and laughs over homemade pasta."
          multiline
        />

        <FormFieldWithExample
          form={form}
          name="personality.rechargeMethod"
          label="How do you recharge?"
          placeholder="What do you do to restore your energy?"
          example="I have this ritual of making tea, putting on vinyl records, and working on my watercolor paintings. It's my way of processing the day and turning experiences into something tangible and beautiful."
          multiline
        />
      </div>
    </div>
  );
}