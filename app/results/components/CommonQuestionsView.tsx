"use client";

import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { CommonQuestion } from "../types";
import { Separator } from "@/components/ui/separator";

interface CommonQuestionsViewProps {
  questions: CommonQuestion[];
}

export function CommonQuestionsView({ questions }: CommonQuestionsViewProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-bold">Key Responses</h2>
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <p className="text-muted-foreground">
              Compelling answers that showcase your best qualities and attract the right connections.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {questions.map((item, index) => (
          <Card key={index} className="p-6">
            <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-primary mb-2">Quick & Memorable:</p>
                <p className="text-muted-foreground">{item.oneLiner}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm font-medium text-primary mb-2">Full Response:</p>
                <p className="text-muted-foreground whitespace-pre-wrap">{item.answer}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}