import { QuestionnaireFormData } from "../../questionnaire/types";

export interface SocialProfile {
  platform: string;
  bio: string;
  profileDescription: string;
  contentIdeas: string[];
  hashtagSuggestions: string[];
}

function generateHashtags(data: QuestionnaireFormData): string[] {
  const personality = data.personality?.type || "thoughtful";
  const passions = data.interests?.passions?.toLowerCase().split(' ').slice(0, 3) || [];
  const location = data.background?.currentLocation?.split(',')[0].toLowerCase() || '';

  const baseHashtags = [
    `#${personality}Soul`,
    `#${location}Life`,
    '#PersonalGrowth',
    '#AuthenticLiving',
    '#LifeJourney'
  ];

  const passionHashtags = passions.map(p => `#${p.replace(/[^a-zA-Z0-9]/g, '')}`);
  return [...new Set([...baseHashtags, ...passionHashtags])];
}

export function generateSocialProfiles(data: QuestionnaireFormData): SocialProfile[] {
  const hashtags = generateHashtags(data);
  const passion = data.interests?.passions?.split('.')[0] || "exploring life's adventures";
  const achievement = data.interests?.achievement?.split('.')[0] || "making a difference";
  const hobby = data.interests?.hobbies?.split('.')[0] || "capturing life's moments";

  return [
    {
      platform: "Instagram",
      bio: `📍 ${data.background?.currentLocation || "Exploring the world"}\n${data.personality?.type || "Thoughtful"} soul | ${passion}\n${hobby}\n✨ ${achievement}`,
      profileDescription: "Visual storytelling focused on your journey, passions, and daily inspirations",
      contentIdeas: [
        "Behind-the-scenes of your creative process",
        "Day-in-the-life photo series",
        "Progress shots of your projects",
        "Local exploration highlights",
        "Inspirational quote cards with your photos"
      ],
      hashtagSuggestions: hashtags
    },
    {
      platform: "LinkedIn",
      bio: `${data.personality?.type || "Thoughtful"} professional passionate about ${passion}. \n\nFocused on ${achievement}.\n\nExploring opportunities in ${data.interests?.learningGoal?.split('.')[0] || "innovative solutions"}.\n\n${data.background?.currentLocation || "Open to connections worldwide"}`,
      profileDescription: "Professional presence highlighting your achievements and expertise",
      contentIdeas: [
        "Industry insights and observations",
        "Project milestone celebrations",
        "Learning journey updates",
        "Professional development stories",
        "Community impact highlights"
      ],
      hashtagSuggestions: [
        "#ProfessionalGrowth",
        "#Innovation",
        "#Leadership",
        "#IndustryInsights",
        "#CareerDevelopment"
      ]
    },
    {
      platform: "Twitter",
      bio: `${data.personality?.type || "Thoughtful"} ${passion.split(' ')[0]} | ${hobby.split(' ')[0]} \n📍 ${data.background?.currentLocation || "Everywhere"}\n✨ ${achievement.split(' ').slice(0, 4).join(' ')}...`,
      profileDescription: "Quick thoughts, insights, and engaging with your community",
      contentIdeas: [
        "Quick tips and insights",
        "Daily observations and musings",
        "Engaging questions for your community",
        "Progress updates in thread form",
        "Real-time event commentary"
      ],
      hashtagSuggestions: hashtags.slice(0, 3)
    }
  ];
}