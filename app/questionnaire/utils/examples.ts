import { examplePools } from "./examplePools";

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function getRandomExample(fieldName: string): string {
  const [section, field] = fieldName.split('.');
  
  if (section && field && examplePools[section]?.[field]) {
    const examples = examplePools[section][field];
    if (Array.isArray(examples)) {
      return getRandomItem(examples);
    }
    return examples; // For single string values
  }
  
  return "";
}

export function generateRandomExample() {
  return {
    background: {
      hometown: getRandomItem(examplePools.background.hometown),
      grewUpStory: getRandomItem(examplePools.background.grewUpStory),
      currentLocation: getRandomItem(examplePools.background.currentLocation),
      whyHere: getRandomItem(examplePools.background.whyHere),
      favoritePlace: getRandomItem(examplePools.background.favoritePlace),
      whyFavoritePlace: getRandomItem(examplePools.background.whyFavoritePlace)
    },
    personality: {
      type: examplePools.personality.type,
      uniqueTrait: getRandomItem(examplePools.personality.uniqueTrait),
      morningPerson: getRandomItem(examplePools.personality.morningPerson),
      perfectDay: getRandomItem(examplePools.personality.perfectDay),
      rechargeMethod: getRandomItem(examplePools.personality.rechargeMethod)
    },
    interests: {
      passions: getRandomItem(examplePools.interests.passions),
      hobbies: getRandomItem(examplePools.interests.hobbies),
      learningGoal: getRandomItem(examplePools.interests.learningGoal),
      bucket: getRandomItem(examplePools.interests.bucket),
      achievement: getRandomItem(examplePools.interests.achievement)
    },
    connections: {
      lookingFor: getRandomItem(examplePools.connections.lookingFor),
      values: getRandomItem(examplePools.connections.values),
      dealBreakers: getRandomItem(examplePools.connections.dealBreakers),
      idealDate: getRandomItem(examplePools.connections.idealDate),
      loveLang: getRandomItem(examplePools.connections.loveLang)
    }
  };
}