"use client";

import { FormFieldWithExample } from "./FormFieldWithExample";
import { UseFormReturn } from "react-hook-form";
import { QuestionnaireFormData } from "../types";
import { generateRandomExample } from "../utils/examples";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";

export function BackgroundSection({ form }: { form: UseFormReturn<QuestionnaireFormData> }) {
  const useExample = () => {
    const randomExample = generateRandomExample();
    form.setValue("background", randomExample.background);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Your Background</h2>
          <p className="text-muted-foreground">Tell us about where you're from and what brought you here.</p>
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
          name="background.hometown"
          label="Where are you from?"
          placeholder="Enter your hometown"
          example="Seattle, Washington"
        />

        <FormFieldWithExample
          form={form}
          name="background.grewUpStory"
          label="What was it like growing up there?"
          placeholder="Share a bit about your hometown experience"
          example="Growing up in the Pacific Northwest shaped my love for nature and adventure. Between hiking in the Cascades and exploring the city's coffee culture, I learned to appreciate both wilderness and urban energy."
          multiline
        />

        <FormFieldWithExample
          form={form}
          name="background.currentLocation"
          label="Where do you live now?"
          placeholder="Enter your current location"
          example="Austin, Texas"
        />

        <FormFieldWithExample
          form={form}
          name="background.whyHere"
          label="What brought you here?"
          placeholder="Tell us what drew you to your current location"
          example="The vibrant music scene and creative energy drew me here. I love how this city combines southern hospitality with modern innovation, plus the food truck scene is unbeatable!"
          multiline
        />

        <FormFieldWithExample
          form={form}
          name="background.favoritePlace"
          label="What's your favorite place in the world?"
          placeholder="Enter your favorite place"
          example="Kyoto, Japan"
        />

        <FormFieldWithExample
          form={form}
          name="background.whyFavoritePlace"
          label="Why is this place special to you?"
          placeholder="Tell us what makes this place meaningful"
          example="The way ancient traditions blend seamlessly with modern life fascinates me. Walking through the bamboo forests and visiting temples at sunset makes me feel both peaceful and inspired."
          multiline
        />
      </div>
    </div>
  );
}