import { DiveSite, CalendarTrip } from '../types/conditions';

export const DIVE_SITES: DiveSite[] = [
  {
    id: 'outer-gbr',
    name: 'Outer Great Barrier Reef (Ribbon Reefs)',
    region: 'Far North Queensland',
    lat: -14.65,
    lng: 145.45,
    depthMax: 40,
    defaultTemp: 27.5,
    defaultVis: 35,
    defaultSwell: 1.2,
    defaultWind: 14,
    description: 'Pristine continental shelf edge. Crystal-clear Coral Sea oceanic inflows with excellent visibility.',
  },
  {
    id: 'ningaloo-trench',
    name: 'Ningaloo Reef & Muiron Trench',
    region: 'Western Australia',
    lat: -21.88,
    lng: 114.12,
    depthMax: 38,
    defaultTemp: 24.8,
    defaultVis: 28,
    defaultSwell: 1.8,
    defaultWind: 16,
    description: 'Direct Indian Ocean swell meeting fringing atolls. Prime megafauna aggregation conditions.',
  },
  {
    id: 'ss-yongala',
    name: 'SS Yongala Historic Shipwreck',
    region: 'Cape Bowling Green, QLD',
    lat: -19.3,
    lng: 147.62,
    depthMax: 30,
    defaultTemp: 26.2,
    defaultVis: 22,
    defaultSwell: 1.1,
    defaultWind: 12,
    description: 'Open sand desert sanctuary. Vigorous tidal nutrients attracting colossal schools of apex marine life.',
  },
  {
    id: 'fish-rock',
    name: 'Fish Rock Ocean Cavern',
    region: 'South West Rocks, NSW',
    lat: -30.9,
    lng: 153.07,
    depthMax: 32,
    defaultTemp: 21.5,
    defaultVis: 20,
    defaultSwell: 1.5,
    defaultWind: 13,
    description: 'Solitary offshore pinnacle where East Australian Current converges with temperate southern waters.',
  },
  {
    id: 'osprey-reef',
    name: 'Osprey Reef Continental Dropoff',
    region: 'Coral Sea Marine Park',
    lat: -13.9,
    lng: 146.6,
    depthMax: 65,
    defaultTemp: 28.1,
    defaultVis: 50,
    defaultSwell: 1.4,
    defaultWind: 15,
    description: 'Isolated oceanic atoll 350km offshore. Phenomenal 50m+ underwater visibility with minimal plankton haze.',
  },
];

export const SCHEDULED_TRIPS: Record<number, CalendarTrip[]> = {
  7: [
    { date: 7, title: 'Ribbon Reefs #3 & Cod Hole', site: 'Outer Great Barrier Reef', spots: 2, price: 2850, vessel: 'The Odyssey Explorer' },
  ],
  12: [
    { date: 12, title: 'Ningaloo Megafauna Drift', site: 'Exmouth Continental Trench', spots: 1, price: 3850, vessel: 'MV Calypso Deep' },
  ],
  14: [
    { date: 14, title: 'SS Yongala Historic Coral Phantom', site: 'Cape Bowling Green Wreck', spots: 3, price: 2950, vessel: 'MV Calypso Deep' },
  ],
  21: [
    { date: 21, title: 'Fish Rock 125m Ocean Chimney', site: 'South West Rocks Sanctuary', spots: 4, price: 2400, vessel: 'Triton Apex RIB' },
  ],
  28: [
    { date: 28, title: 'Osprey Coral Sea Deep Dropoff', site: 'Isolated Coral Sea Atolls', spots: 2, price: 4200, vessel: 'The Odyssey Explorer' },
  ],
};
