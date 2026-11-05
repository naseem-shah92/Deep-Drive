export type LogbookCategory = 'All' | 'Reef' | 'Wrecks' | 'Marine Life' | 'Night Dives' | 'Divers';

export interface LogbookEntry {
  diveNo: number;
  title: string;
  location: string;
  region: string;
  date: string;
  depth: string;
  bottomTime: string;
  waterTemp: string;
  visibility: string;
  gasMix: string;
  category: 'Reef' | 'Wrecks' | 'Marine Life' | 'Night Dives' | 'Divers';
  image: string;
  diverName: string;
  certification: string;
  notes: string;
  speciesSpotted: string[];
}
