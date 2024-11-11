"use client";

import { SignIn } from "@clerk/nextjs";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0">
        <SignIn 
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "border-0 shadow-none",
            }
          }}
          afterSignInUrl="/results"
          signUpUrl="/sign-up"
        />
      </DialogContent>
    </Dialog>
  );
}