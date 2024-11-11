import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <Loader2 className="w-12 h-12 animate-spin mx-auto text-primary" />
        <h2 className="text-2xl font-bold">Crafting Your Story...</h2>
        <p className="text-muted-foreground">
          We&apos;re transforming your responses into compelling narratives.
        </p>
      </div>
    </div>
  );
}