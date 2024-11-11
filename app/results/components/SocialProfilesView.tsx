"use client";

import { Card } from "@/components/ui/card";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { SocialProfile } from "../utils/social-generators";
import { Separator } from "@/components/ui/separator";

interface SocialProfilesViewProps {
  profiles: SocialProfile[];
}

const platformIcons = {
  Instagram: Instagram,
  LinkedIn: Linkedin,
  Twitter: Twitter
};

export function SocialProfilesView({ profiles }: SocialProfilesViewProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Social Media Profiles</h2>

      <div className="grid gap-6">
        {profiles.map((profile, index) => {
          const Icon = platformIcons[profile.platform as keyof typeof platformIcons];
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-2 mb-4">
                {Icon && <Icon className="w-5 h-5" />}
                <h3 className="text-xl font-semibold">{profile.platform}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-primary mb-2">Bio:</p>
                  <pre className="text-muted-foreground whitespace-pre-wrap font-sans">
                    {profile.bio}
                  </pre>
                </div>

                <Separator />

                <div>
                  <p className="text-sm font-medium text-primary mb-2">Content Strategy:</p>
                  <p className="text-muted-foreground mb-4">{profile.profileDescription}</p>
                  
                  <p className="text-sm font-medium mb-2">Content Ideas:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {profile.contentIdeas.map((idea, i) => (
                      <li key={i}>{idea}</li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <p className="text-sm font-medium text-primary mb-2">Recommended Hashtags:</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.hashtagSuggestions.map((tag, i) => (
                      <span key={i} className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}