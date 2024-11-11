"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { AuthModal } from "./auth-modal";
import { UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export function AuthButton() {
  const { user, isLoaded } = useUser();
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (!isLoaded) {
    return (
      <Button disabled>
        <Loader2 className="w-4 h-4 animate-spin" />
      </Button>
    );
  }

  if (user) {
    return <UserButton afterSignOutUrl="/" />;
  }

  return (
    <>
      <Button onClick={() => setShowAuthModal(true)}>
        Sign In
      </Button>
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </>
  );
}