"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const stripePromise = loadStripe('pk_test_51KXDgIFJaDznJQerhAO4EwwKNQZvWucwNob6GMwRf09cGXboURv9wuoGP2oiJHWwQeyMKazjiQwioEBXhR5J2bnY00Q8wnzUaT');

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: string;
}

export function PaymentModal({ isOpen, onClose, formData }: PaymentModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setIsLoading(true);
      
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();
      
      if (url && typeof window !== "undefined") {
        window.location.assign(url);
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Unlock Your Premium Story</DialogTitle>
          <DialogDescription>
            Get access to professionally crafted responses that will make you stand out.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h3 className="font-semibold">What you&apos;ll get:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>10 professionally crafted responses</li>
              <li>Bonus conversation starters</li>
              <li>Lifetime access to your story</li>
              <li>Future updates and improvements</li>
            </ul>
          </div>
          <Button 
            onClick={handlePayment} 
            className="w-full" 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              `Unlock for $10`
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}