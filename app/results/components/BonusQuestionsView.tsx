"use client";

import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { CommonQuestion } from "../types";
import { Separator } from "@/components/ui/separator";

interface BonusQuestionsViewProps {
  questions: CommonQuestion[];
}

export function BonusQuestionsView({ questions }: BonusQuestionsViewProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <h2 className="text-3xl font-bold">Bonus Questions</h2>
        <Sparkles className="w-6 h-6 text-primary" />
      </div>

      <div className="grid gap-6">
        {questions.map((item, index) => (
          <Card key={index} className="p-6">
            <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
            <p className="text-sm font-medium text-primary mb-3">Quick response:</p>
            <p className="text-muted-foreground mb-4">{item.oneLiner}</p>
            <Separator className="my-4" />
            <p className="text-sm font-medium text-primary mb-3">Detailed response:</p>
            <p className="text-muted-foreground whitespace-pre-wrap">{item.answer}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}