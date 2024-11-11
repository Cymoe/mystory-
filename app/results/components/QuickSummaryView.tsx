import { QuickSummary } from "../types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import { useState } from "react";

interface QuickSummaryViewProps {
  summaries: QuickSummary[];
}

export function QuickSummaryView({ summaries }: QuickSummaryViewProps) {
  const [showExamples, setShowExamples] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">Quick Summaries</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowExamples(!showExamples)}
        >
          <Lightbulb className="w-4 h-4 mr-2" />
          {showExamples ? "Hide Examples" : "Show Examples"}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {summaries.map((summary, index) => (
          <Card key={index} className="p-4">
            <h3 className="font-medium mb-2">{summary.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {summary.content}
            </p>
            {showExamples && summary.examples && (
              <div className="border-t pt-3 mt-3">
                <p className="text-xs text-muted-foreground italic">
                  Example responses:
                </p>
                <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                  {summary.examples.map((example, i) => (
                    <li key={i} className="text-muted-foreground">
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}