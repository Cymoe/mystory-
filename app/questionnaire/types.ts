export interface QuestionnaireFormData {
  background?: {
    hometown?: string;
    currentLocation?: string;
    whyHere?: string;
  };
  personality?: {
    type?: 'adventurous' | 'thoughtful' | 'creative' | 'nurturer' | 'energetic';
    uniqueTrait?: string;
    rechargeMethod?: string;
    perfectDay?: string;
  };
  interests?: {
    passions?: string;
    hobbies?: string;
    learningGoal?: string;
    bucket?: string;
  };
  connections?: {
    values?: string;
    lookingFor?: string;
    loveLang?: string;
    idealDate?: string;
  };
}