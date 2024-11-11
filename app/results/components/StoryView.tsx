"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import { StoryStep } from "../types";

interface StoryViewProps {
  steps: StoryStep[];
}

export function StoryView({ steps }: StoryViewProps) {
  const [showExample, setShowExample] = useState(false);

  const exampleSteps: StoryStep[] = [
    {
      title: "First Impression",
      content: "A creative soul from Seattle, now embracing life in vibrant New York City. Known for thinking outside the box and finding beauty in unexpected places.\n\nWhat truly sets me apart is my passion for street photography and urban storytelling. When I'm not exploring hidden city gems with my camera, you might find me hosting intimate dinner parties where every dish tells a story.\n\nI believe in authentic connections and shared adventures, and I'm looking for someone who appreciates both quiet moments and spontaneous explorations.",
    },
    {
      title: "Life Philosophy",
      content: "My journey from the Pacific Northwest to the East Coast has taught me that growth happens outside our comfort zones. I find my peace in early morning walks through the city, capturing the world as it wakes up.\n\nI'm constantly inspired by the intersection of art and everyday life. My perfect day involves discovering a new neighborhood, meeting interesting people, and ending with good food and better conversations.\n\nLooking ahead, I'm excited about learning traditional film photography, and my ultimate dream is to publish a photo book of untold city stories. I believe the best connections are built on curiosity and openness to new experiences.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowExample(!showExample)}
          className="flex items-center gap-2"
        >
          <Lightbulb className="w-4 h-4" />
          {showExample ? "Hide" : "Show"} Example
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {steps.map((step, index) => (
          <Card key={index} className="p-6">
            <h2 className="text-2xl font-semibold mb-4">{step.title}</h2>
            <p className="whitespace-pre-wrap text-muted-foreground">
              {step.content}
            </p>
          </Card>
        ))}
      </div>

      {showExample && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-muted-foreground">
            Example Story
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {exampleSteps.map((step, index) => (
              <Card key={index} className="p-6 bg-muted">
                <h2 className="text-2xl font-semibold mb-4">{step.title}</h2>
                <p className="whitespace-pre-wrap text-muted-foreground">
                  {step.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}