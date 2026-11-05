export interface DiveSite {
  id: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  depthMax: number;
  defaultTemp: number;
  defaultVis: number;
  defaultSwell: number;
  defaultWind: number;
  description: string;
}

export interface MarineConditions {
  waterTemp: number;
  visibility: number;
  swellHeight: number;
  windSpeed: number;
  windDirection: string;
  uvIndex: number;
  rating: 'Excellent' | 'Good' | 'Fair' | 'Challenging';
  ratingScore: number; // 1-10
  isLive: boolean;
  updatedAt: string;
}

export interface CalendarTrip {
  date: number; // day of month
  title: string;
  site: string;
  spots: number;
  price: number;
  vessel: string;
}
