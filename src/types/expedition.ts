export type ExpeditionCategory = 'Reef' | 'Wreck' | 'Cave' | 'Wildlife' | 'Technical';

export interface ItineraryDay {
  day: string;
  title: string;
  detail: string;
}

export interface Expedition {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  region: string;
  category: ExpeditionCategory;
  depth: string;
  duration: string;
  difficulty: 'Beginner' | 'Advanced' | 'Technical';
  priceAUD: number;
  image: string;
  highlights: string[];
  bestSeason: string;
  groupSize: string;
  certification: string;
  description: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
}
