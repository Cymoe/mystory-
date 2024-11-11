import { QuestionnaireFormData } from "../../questionnaire/types";

interface ResponseTemplate {
  patterns: string[];
  combine: (data: QuestionnaireFormData) => string;
}

const templates: Record<string, ResponseTemplate> = {
  tellMeAboutYourself: {
    patterns: [
      "As a {personality} individual deeply immersed in {passion}, I've built a unique path that combines {achievement} with {uniqueTrait}. My journey from {hometown} to {currentLocation} has shaped my perspective on {learningGoal}, driving me to create meaningful impact through innovative approaches.",
      "I'm a {personality} innovator who's transformed my passion for {passion} into tangible results. What truly sets me apart is {uniqueTrait}, which I've leveraged to {achievement}. Currently, I'm exploring {learningGoal}, always seeking ways to push boundaries and create value.",
      "Combining my {personality} nature with expertise in {passion}, I've carved out a unique niche that led me to {achievement}. My background from {hometown} to {currentLocation} has given me a distinctive perspective on {learningGoal}, allowing me to approach challenges with fresh insights."
    ],
    combine: (data) => {
      const pattern = templates.tellMeAboutYourself.patterns[Math.floor(Math.random() * templates.tellMeAboutYourself.patterns.length)];
      return pattern
        .replace("{personality}", data.personality?.type || "thoughtful")
        .replace("{passion}", extractHighlight(data.interests?.passions))
        .replace("{achievement}", extractHighlight(data.interests?.achievement))
        .replace("{uniqueTrait}", extractHighlight(data.personality?.uniqueTrait))
        .replace("{hometown}", data.background?.hometown || "my hometown")
        .replace("{currentLocation}", data.background?.currentLocation || "where I am now")
        .replace("{learningGoal}", extractHighlight(data.interests?.learningGoal));
    }
  },
  // Add more sophisticated templates for other questions...
};

function extractHighlight(text: string = ""): string {
  return text
    .split('.')[0]
    .trim()
    .replace(/^I('m| am)? (deeply )?passionate about /i, '')
    .replace(/^Currently /i, '')
    .replace(/^I('m| am)? /i, '')
    .replace(/^Started /i, '')
    .replace(/^Being /i, '')
    .replace(/^My /i, '')
    .trim();
}

function combineTraits(data: QuestionnaireFormData): string[] {
  const traits = [
    data.personality?.uniqueTrait,
    data.interests?.passions,
    data.interests?.achievement,
    data.personality?.perfectDay,
    data.interests?.learningGoal
  ].filter(Boolean);

  return traits.map(extractHighlight);
}

export function generateCommonQuestions(data: QuestionnaireFormData): CommonQuestion[] {
  const personality = data.personality?.type || "thoughtful";
  const traits = combineTraits(data);
  const passion = extractHighlight(data.interests?.passions);
  const achievement = extractHighlight(data.interests?.achievement);
  const uniqueTrait = extractHighlight(data.personality?.uniqueTrait);
  const learningGoal = extractHighlight(data.interests?.learningGoal);

  return [
    {
      question: "Tell me about yourself",
      oneLiner: `${personality} innovator combining ${passion} with ${uniqueTrait}`,
      answer: templates.tellMeAboutYourself.combine(data)
    },
    {
      question: "What makes you unique?",
      oneLiner: `Merging ${uniqueTrait} with expertise in ${passion}`,
      answer: `My unique strength lies in combining ${uniqueTrait} with deep expertise in ${passion}. This distinctive blend has enabled me to ${achievement}, demonstrating my ability to transform creative thinking into meaningful results. I bring this same innovative approach to ${learningGoal}, constantly pushing boundaries and discovering new possibilities.`
    },
    {
      question: "What drives you?",
      oneLiner: `Innovating in ${passion} while mastering ${learningGoal}`,
      answer: `${data.interests?.passions} This passion has led me to ${achievement}, creating tangible impact in the community. I'm currently channeling this energy into ${learningGoal}, while drawing inspiration from ${data.personality?.perfectDay}. It's this combination of purpose and continuous growth that drives me forward.`
    },
    {
      question: "What's your approach to life?",
      oneLiner: `Balancing ${passion} with personal growth through ${learningGoal}`,
      answer: `I believe in approaching life with a blend of purpose and curiosity. My journey in ${passion} has taught me the value of ${data.connections?.values}, while my current focus on ${learningGoal} keeps me growing and evolving. This philosophy has helped me ${achievement}, proving that authentic passion combined with dedicated action creates meaningful results.`
    },
    {
      question: "What are you looking for?",
      oneLiner: `Authentic connections through shared interests in ${passion} and ${learningGoal}`,
      answer: `${data.connections?.lookingFor} I believe the best connections are built on a foundation of ${data.connections?.values}. My involvement in ${passion} and current journey with ${learningGoal} reflect my commitment to growth and authentic engagement. I'm excited to connect with others who share this vision for meaningful interaction and mutual development.`
    }
  ];
}

export interface CommonQuestion {
  question: string;
  answer: string;
  oneLiner: string;
}

export function generateBonusQuestions(data: QuestionnaireFormData): CommonQuestion[] {
  const passion = extractHighlight(data.interests?.passions);
  const achievement = extractHighlight(data.interests?.achievement);
  const uniqueTrait = extractHighlight(data.personality?.uniqueTrait);
  const learningGoal = extractHighlight(data.interests?.learningGoal);
  const hobbies = extractHighlight(data.interests?.hobbies);

  return [
    {
      question: "What's your ideal environment?",
      oneLiner: extractHighlight(data.personality?.perfectDay),
      answer: `I thrive in environments that blend ${passion} with opportunities for ${learningGoal}. ${data.personality?.perfectDay} This balance of structured growth and creative freedom allows me to maximize my impact while staying true to my values.`
    },
    {
      question: "How do you create value?",
      oneLiner: `Transforming ${passion} into meaningful impact`,
      answer: `I create value by combining my expertise in ${passion} with my unique ability to ${uniqueTrait}. This approach has enabled me to ${achievement}, and I'm currently expanding my impact through ${learningGoal}. It's about transforming passion into tangible results that benefit others.`
    },
    {
      question: "What's your vision?",
      oneLiner: `Revolutionizing ${passion} through innovative approaches`,
      answer: `My vision centers on revolutionizing ${passion} by integrating it with ${learningGoal}. Having already ${achievement}, I'm focused on creating even broader impact. I believe that combining deep expertise with continuous innovation is key to creating lasting positive change.`
    },
    {
      question: "How do you stand out?",
      oneLiner: uniqueTrait,
      answer: `What sets me apart is my ability to ${uniqueTrait}. This unique perspective has helped me ${achievement} and drives my current focus on ${learningGoal}. It's about bringing fresh insights to ${passion} while maintaining authenticity and creating meaningful connections.`
    },
    {
      question: "What's your superpower?",
      oneLiner: `Combining ${passion} with ${uniqueTrait}`,
      answer: `My superpower lies in merging ${passion} with ${uniqueTrait}. This combination has enabled me to ${achievement} and fuels my journey in ${learningGoal}. It's about leveraging unique strengths to create unexpected value and meaningful impact.`
    }
  ];
}