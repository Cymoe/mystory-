"use client";

import { FormFieldWithExample } from "./FormFieldWithExample";
import { UseFormReturn } from "react-hook-form";
import { QuestionnaireFormData } from "../types";
import { generateRandomExample } from "../utils/examples";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";

export function ConnectionsSection({ form }: { form: UseFormReturn<QuestionnaireFormData> }) {
  const useExample = () => {
    const randomExample = generateRandomExample();
    form.setValue("connections", randomExample.connections);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Your Connections</h2>
          <p className="text-muted-foreground">Tell us about what you value in relationships.</p>
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
          name="connections.lookingFor"
          label="What kind of connection are you looking for?"
          placeholder="Describe your ideal connection"
          example="Someone who shares my curiosity about life and isn't afraid to be silly. I value deep conversations but also want someone who'll join me in random adventures, like impromptu road trips or trying that new fusion restaurant."
          multiline
        />

        <FormFieldWithExample
          form={form}
          name="connections.values"
          label="What do you value most in relationships?"
          placeholder="Share your relationship values"
          example="Authenticity and emotional intelligence are crucial to me. I believe in open communication, supporting each other's growth, and maintaining individuality within a relationship. Also, kindness - both to each other and to others."
          multiline
        />

        <FormFieldWithExample
          form={form}
          name="connections.dealBreakers"
          label="What are your deal-breakers?"
          placeholder="Share what doesn't work for you"
          example="Closed-mindedness and unwillingness to grow. Life's too short for negativity or staying in comfort zones forever. Also, being unkind to service workers - it tells me a lot about someone's character."
          multiline
        />

        <FormFieldWithExample
          form={form}
          name="connections.idealDate"
          label="Describe your ideal first date"
          placeholder="Share what makes a great first date"
          example="A cooking class where we learn to make something completely new to both of us, followed by enjoying our creation in a nearby park. It's interactive, shows how we work together, and creates a memorable shared experience."
          multiline
        />

        <FormFieldWithExample
          form={form}
          name="connections.loveLang"
          label="How do you express and receive love?"
          placeholder="Share your love languages"
          example="I express love through thoughtful gestures and quality time. Whether it's remembering small details about your day or planning surprise adventures, I believe in showing care through actions and undivided attention."
          multiline
        />
      </div>
    </div>
  );
}