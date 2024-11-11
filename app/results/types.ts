export interface StoryStep {
  title: string;
  content: string;
}

export interface CommonQuestion {
  question: string;
  answer: string;
  oneLiner: string;
}

export interface QuickSummary {
  title: string;
  content: string;
  examples?: string[];
}

export interface CommonAnswers {
  tellMeAboutYourself: string;
  whatMakesYouUnique: string;
  whatAreYouPassionate: string;
  whatAreYouLookingFor: string;
  whyHireYou: string;
  whatDoYouDo: string;
  whereAreYouFrom: string;
  whatBringsYouHere: string;
  whereDoYouSeeYourself: string;
  howDidYouGetStarted: string;
}