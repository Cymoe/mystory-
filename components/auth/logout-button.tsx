"use client";

import { Button } from "@/components/ui/button";

export function LogoutButton() {
  return (
    <Button variant="outline" asChild>
      <a href="/api/auth/logout">Logout</a>
    </Button>
  );
}