"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Progress } from "@/components/ui/progress";
import { BackgroundSection } from "./components/BackgroundSection";
import { PersonalitySection } from "./components/PersonalitySection";
import { InterestsSection } from "./components/InterestsSection";
import { ConnectionsSection } from "./components/ConnectionsSection";
import type { QuestionnaireFormData } from "./types";

const formSchema = z.object({
  background: z.object({
    hometown: z.string().min(2, "Please enter your hometown"),
    grewUpStory: z.string().min(10, "Please share a bit about growing up there"),
    currentLocation: z.string().min(2, "Please enter where you live now"),
    whyHere: z.string().min(10, "Please share what brought you here"),
    favoritePlace: z.string().min(2, "Please share your favorite place"),
    whyFavoritePlace: z.string().min(10, "Please tell us why this place is special"),
  }),
  personality: z.object({
    type: z.string().min(2, "Please select your personality type"),
    uniqueTrait: z.string().min(10, "Please share something unique about you"),
    morningPerson: z.string().min(10, "Please tell us about your daily rhythm"),
    perfectDay: z.string().min(10, "Please describe your perfect day"),
    rechargeMethod: z.string().min(10, "Please share how you recharge"),
  }),
  interests: z.object({
    passions: z.string().min(10, "Please share what you're passionate about"),
    hobbies: z.string().min(10, "Please share your hobbies"),
    learningGoal: z.string().min(10, "Please share what you'd like to learn"),
    bucket: z.string().min(10, "Please share something from your bucket list"),
    achievement: z.string().min(10, "Please share an achievement"),
  }),
  connections: z.object({
    lookingFor: z.string().min(10, "Please share what you're looking for"),
    values: z.string().min(10, "Please share your relationship values"),
    dealBreakers: z.string().min(10, "Please share your deal-breakers"),
    idealDate: z.string().min(10, "Please describe your ideal first date"),
    loveLang: z.string().min(10, "Please share your love languages"),
  }),
});

export default function Questionnaire() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const form = useForm<QuestionnaireFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      background: {
        hometown: "",
        grewUpStory: "",
        currentLocation: "",
        whyHere: "",
        favoritePlace: "",
        whyFavoritePlace: "",
      },
      personality: {
        type: "",
        uniqueTrait: "",
        morningPerson: "",
        perfectDay: "",
        rechargeMethod: "",
      },
      interests: {
        passions: "",
        hobbies: "",
        learningGoal: "",
        bucket: "",
        achievement: "",
      },
      connections: {
        lookingFor: "",
        values: "",
        dealBreakers: "",
        idealDate: "",
        loveLang: "",
      },
    },
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const validateCurrentStep = async () => {
    let isValid = false;
    const currentValues = form.getValues();

    switch (step) {
      case 1:
        isValid = await form.trigger([
          "background.hometown",
          "background.grewUpStory",
          "background.currentLocation",
          "background.whyHere",
          "background.favoritePlace",
          "background.whyFavoritePlace",
        ]);
        break;
      case 2:
        isValid = await form.trigger([
          "personality.type",
          "personality.uniqueTrait",
          "personality.morningPerson",
          "personality.perfectDay",
          "personality.rechargeMethod",
        ]);
        break;
      case 3:
        isValid = await form.trigger([
          "interests.passions",
          "interests.hobbies",
          "interests.learningGoal",
          "interests.bucket",
          "interests.achievement",
        ]);
        break;
      case 4:
        isValid = await form.trigger([
          "connections.lookingFor",
          "connections.values",
          "connections.dealBreakers",
          "connections.idealDate",
          "connections.loveLang",
        ]);
        break;
    }

    return isValid;
  };

  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    if (isValid) {
      if (step < 4) {
        setStep(step + 1);
      } else {
        const values = form.getValues();
        const encodedData = encodeURIComponent(JSON.stringify(values));
        router.push(`/results?data=${encodedData}`);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const progress = (step / 4) * 100;

  return (
    <div className="container max-w-2xl mx-auto px-4 py-8">
      <Progress value={progress} className="mb-8" />
      
      <Card className="p-6">
        <Form {...form}>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            {step === 1 && <BackgroundSection form={form} />}
            {step === 2 && <PersonalitySection form={form} />}
            {step === 3 && <InterestsSection form={form} />}
            {step === 4 && <ConnectionsSection form={form} />}

            <div className="flex justify-between pt-6">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                >
                  Previous
                </Button>
              )}
              <Button 
                type="button"
                onClick={handleNext}
                className="ml-auto"
              >
                {step === 4 ? "Create Your Story" : "Next"}
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
}