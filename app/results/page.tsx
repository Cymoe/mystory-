"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSupabase } from "@/components/providers/supabase-provider";
import { StoryView } from "./components/StoryView";
import { CommonQuestionsView } from "./components/CommonQuestionsView";
import { BonusQuestionsView } from "./components/BonusQuestionsView";
import { PaymentModal } from "@/components/payment/PaymentModal";
import { generateCommonQuestions, generateBonusQuestions } from "./utils/generators";
import { QuestionnaireFormData } from "../questionnaire/types";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function ResultsPage() {
  const supabase = useSupabase();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [hasPaid, setHasPaid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  const data = searchParams.get("data");
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, [supabase]);

  useEffect(() => {
    const verifyPayment = async () => {
      if (sessionId) {
        const { data, error } = await supabase
          .from('purchases')
          .select('status')
          .eq('stripe_session_id', sessionId)
          .single();

        if (data && data.status === 'completed') {
          setHasPaid(true);
        }
      }
      setIsLoading(false);
    };

    verifyPayment();
  }, [sessionId, supabase]);

  if (!data) {
    router.push("/questionnaire");
    return null;
  }

  const formData: QuestionnaireFormData = JSON.parse(decodeURIComponent(data));
  const commonQuestions = generateCommonQuestions(formData);
  const bonusQuestions = generateBonusQuestions(formData);

  if (isLoading) {
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

  if (!hasPaid) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold">Your Story is Ready!</h1>
            <p className="text-xl text-muted-foreground">
              We&apos;ve crafted compelling responses that will help you make meaningful connections.
            </p>
          </div>

          {/* Blurred Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
            <div className="filter blur-sm pointer-events-none">
              <CommonQuestionsView questions={commonQuestions.slice(0, 2)} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center space-y-6 p-8 rounded-lg bg-background/80 backdrop-blur-sm">
                <h2 className="text-2xl font-bold">Unlock Your Full Story</h2>
                <p className="text-muted-foreground max-w-md">
                  Get access to all your professionally crafted responses, including bonus conversation starters.
                </p>
                <Button 
                  size="lg" 
                  onClick={() => setShowPaymentModal(true)}
                >
                  View Full Story ($10)
                </Button>
              </div>
            </div>
          </div>

          <PaymentModal 
            isOpen={showPaymentModal}
            onClose={() => setShowPaymentModal(false)}
            formData={data}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Your Story</h1>
          {user && (
            <Button 
              variant="outline" 
              onClick={() => supabase.auth.signOut()}
            >
              Sign Out
            </Button>
          )}
        </div>

        <CommonQuestionsView questions={commonQuestions} />
        <BonusQuestionsView questions={bonusQuestions} />
      </div>
    </div>
  );
}