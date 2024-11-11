"use client";

import { useUser } from '@auth0/nextjs-auth0/client';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogoutButton } from "@/components/auth/logout-button";
import { AuthCheck } from "@/components/auth/auth-check";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Dashboard() {
  const { user } = useUser();

  const getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };
  getUser();

  return (
    <AuthCheck>
      <div className="container mx-auto py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Your Stories</h1>
          <LogoutButton />
        </div>
        
        <div className="grid gap-6">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Welcome, {user?.name || "Story Crafter"}!
            </h2>
            <p className="text-muted-foreground mb-4">
              Your stories and responses are securely saved here. Create a new story or review your existing ones.
            </p>
            <Button asChild>
              <a href="/questionnaire">Create New Story</a>
            </Button>
          </Card>
        </div>
      </div>
    </AuthCheck>
  );
}