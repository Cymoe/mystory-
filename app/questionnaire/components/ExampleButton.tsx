"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Lightbulb } from "lucide-react";

interface ExampleButtonProps {
  example: string;
  onShow: (example: string) => void;
}

export function ExampleButton({ example, onShow }: ExampleButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => onShow(example)}
          >
            <Lightbulb className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>See example</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}