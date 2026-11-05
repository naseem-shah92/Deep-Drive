import { Vessel, SafetyStandard, FleetStat } from '../types/fleet';

export const FLEET: Vessel[] = [
  {
    id: 'calypso-deep',
    name: 'MV Calypso Deep',
    type: '45m Ice-Class Oceanic Expedition Superyacht',
    length: '45.2 meters (148 ft)',
    capacity: '12 Divers + 14 Crew & Dive Masters',
    speed: '16 knots cruising',
    range: '4,500 nautical miles',
    features: [
      'Twin continuous Nitrox membrane blending plants',
      'Hydraulic teak dive transom platform with twin elevator lifts',
      'Dedicated digital imaging lab with dry camera benches & compressed air',
      'Full en-suite air-conditioned staterooms with satellite comms',
      'Onboard hyperbaric decompression evacuation chamber (Hyperlite)',
    ],
    description: 'Custom-built in Western Australia for blue-water pelagic research and deep diving comfort. Features an ultra-stable bulbous bow and zero-speed gyro stabilizers for calm anchorages in open atolls.',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80',
    status: 'Active Deployment',
  },
  {
    id: 'triton-apex',
    name: 'Triton Apex Offshore RIB',
    type: '11.5m High-Velocity Rapid Expedition Tender',
    length: '11.5 meters (38 ft)',
    capacity: '8 Divers + 2 Skipper/Tender Crew',
    speed: '44 knots sprint',
    range: '320 nautical miles',
    features: [
      'Twin Mercury Racing 400R Outboard Motors',
      'Side-scan 3D chirp sonar and FLIR thermal night vision',
      'Fold-out diver ladders and custom cylinder racks',
      'Emergency 100% Demand Medical Oxygen delivery system',
      'Satellite AIS personal transponder tracking console',
    ],
    description: 'Engineered for swift drop-offs and drift pickups in heavy ocean swell. Delivers divers to isolated pinnacles, offshore caves, and remote reef cuts with speed and precision.',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80',
    status: 'Charter Standby',
  },
  {
    id: 'abyss-one',
    name: 'Abyss-One Deep Submersible Support',
    type: 'Manned 300m Ocean Research Tender',
    length: '9.2 meters (30 ft)',
    capacity: '3 Passengers (1 Pilot + 2 Divers)',
    speed: '3 knots submerged',
    range: '12 hours bottom life support',
    features: [
      'Panoramic acrylic viewing sphere (360° horizon)',
      'Dual HD 4K broadcast pan-and-tilt cinema optics',
      'Articulated robotic hydraulic manipulator arm with rock core sampler',
      'Redundant closed-loop oxygen scrubber system with 96hr emergency reserve',
    ],
    description: 'Designed for deep bathymetric scouting of coral dropoffs and unmapped shipwrecks beyond recreational scuba limits.',
    image: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&q=80',
    status: 'Active Deployment',
  },
];

export const SAFETY_STANDARDS: SafetyStandard[] = [
  {
    title: '1:4 Maximum Guide Ratio',
    desc: 'Strictly limited guest cadres ensure personalized supervision, safety and undisturbed marine encounters.',
    iconName: 'Users',
  },
  {
    title: 'Dedicated Emergency Medical O2',
    desc: 'Redundant demand-valve 100% medical oxygen delivery systems on all dive decks and tender vessels.',
    iconName: 'HeartPulse',
  },
  {
    title: 'DAN Insurance & Airlift Ready',
    desc: 'Direct telemetry connection with Divers Alert Network medical hotline and priority airlift protocols.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Nitrox & Trimix Pure Blending',
    desc: 'Onboard continuous membrane nitrox generators and certified gas blenders with digital oxygen analysis.',
    iconName: 'Wind',
  },
  {
    title: 'Satellite Marine Radar & AIS',
    desc: 'Every diver is equipped with personal GPS/AIS emergency transponders linked to shipboard plotters.',
    iconName: 'Anchor',
  },
  {
    title: 'Hyperbaric Chamber Ready',
    desc: 'Onboard portable Hyperlite chamber and emergency evacuation protocols mapped for every dive site.',
    iconName: 'Award',
  },
];

export const FLEET_STATS: FleetStat[] = [
  {
    value: '18+',
    label: 'Years Operating',
    sub: 'Australian Waters',
  },
  {
    value: '4,200+',
    label: 'Dives Completed',
    sub: 'Across 42 remote atolls',
  },
  {
    value: '100%',
    label: 'Incident-Free Safety',
    sub: 'Zero decompression hits',
    highlight: true,
  },
  {
    value: '1 : 4',
    label: 'Guide-to-Diver Ratio',
    sub: 'Guaranteed private cadre',
  },
];
