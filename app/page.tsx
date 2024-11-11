import Link from 'next/link';
import { ArrowRight, Heart, Smile, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className={cn(
      "min-h-screen bg-gradient-to-b from-background to-secondary"
    )}>
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Share Your Story
            <span className="text-primary block mt-2">Make Meaningful Connections</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your experiences into engaging stories that help others truly understand and connect with you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Heart className="w-8 h-8" />,
              title: "Authentic Stories",
              description: "Share your journey in a way that resonates with others"
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Deeper Connections",
              description: "Create meaningful relationships through shared experiences"
            },
            {
              icon: <Smile className="w-8 h-8" />,
              title: "Personal Growth",
              description: "Reflect on your experiences and celebrate your journey"
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-card p-6 rounded-lg shadow-lg border border-border/50 hover:border-primary/50 transition-colors"
              )}
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/questionnaire">
            <Button size="lg" className="group">
              Start Your Story
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}