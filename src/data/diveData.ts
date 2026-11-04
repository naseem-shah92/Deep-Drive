export interface Expedition {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  region: string;
  category: 'Reef' | 'Wreck' | 'Cave' | 'Wildlife' | 'Technical';
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
  itinerary: { day: string; title: string; detail: string }[];
  inclusions: string[];
}

export const EXPEDITIONS: Expedition[] = [
  {
    id: 'ningaloo-whale-sharks',
    title: 'Ningaloo Megafauna Drift',
    subtitle: 'Whale Sharks, Mantas & Outer Atoll Walls',
    location: 'Ningaloo Marine Park, Western Australia',
    region: 'Western Australia',
    category: 'Wildlife',
    depth: '18 – 35m',
    duration: '4 Days / 3 Nights',
    difficulty: 'Advanced',
    priceAUD: 3850,
    image: '/src/assets/images/ningaloo_whale_shark_1793824357940.jpg',
    highlights: ['Oceanic Whale Shark private encounters', 'Night blackwater dives over the continental dropoff', 'Lighthouse Bay tiger shark & turtle cleaning stations'],
    bestSeason: 'March to August',
    groupSize: 'Max 6 Divers (1:3 Guide Ratio)',
    certification: 'PADI/SSI Advanced Open Water or equivalent',
    description: "Sail beyond the tourist fringe to the westernmost edge of Australia. Drift alongside majestic whale sharks and resident oceanic manta rays over pristine coral gardens that plunge into the deep Indian Ocean trench.",
    itinerary: [
      { day: 'Day 01', title: 'Embarkation & Outer Fringing Reef', detail: 'Private tender transfer from Exmouth to MV Calypso Deep. Check-out dive at Lighthouse Bay, followed by twilight wall exploration.' },
      { day: 'Day 02', title: 'Megafauna & Continental Shelf Edge', detail: 'Morning aerial-scouted encounters with pelagic whale sharks. Afternoon deep drift dive along the Muiron Islands shelf.' },
      { day: 'Day 03', title: 'Manta Highway & Blackwater Dive', detail: 'Diving the iconic Manta cleaning stations. Midnight deep blackwater dive suspended in oceanic darkness with bioluminescent siphonophores.' },
      { day: 'Day 04', title: 'Navy Pier & Disembarkation', detail: 'Morning macro exploration at the world-renowned Exmouth Navy Pier before private helicopter or coastal transfer.' },
    ],
    inclusions: ['Luxury en-suite stateroom aboard MV Calypso Deep', 'All Nitrox fills and weights', 'Private Marine Biologist expedition leader', 'Chef-prepared degustation dining and fine Australian wines', 'Full high-res documentary photo/video package of your dives'],
  },
  {
    id: 'ss-yongala-historic-wreck',
    title: 'SS Yongala Coral Phantom',
    subtitle: "Australia's Most Revered Historic Shipwreck",
    location: 'Cape Bowling Green, Queensland',
    region: 'Great Barrier Reef Marine Park',
    category: 'Wreck',
    depth: '15 – 30m',
    duration: '3 Days / 2 Nights',
    difficulty: 'Advanced',
    priceAUD: 2950,
    image: '/src/assets/images/ss_yongala_shipwreck_1793824358224.jpg',
    highlights: ['110-meter passenger steamship lost in 1911', 'Colossal Queensland groupers & swirling barracuda vortexes', 'Pristine encrustation of sea whips, gorgonians and soft corals'],
    bestSeason: 'August to December',
    groupSize: 'Max 8 Divers (1:4 Guide Ratio)',
    certification: 'Advanced Open Water (Min. 30 logged dives)',
    description: "Sunk in a cyclonic tempest in 1911, the 110-meter SS Yongala now serves as an oasis in an open sandy desert. Encircled by clouds of giant trevally, manta rays, olive sea snakes, and bull sharks, it offers one of the most biodiversity-dense wreck experiences on Earth.",
    itinerary: [
      { day: 'Day 01', title: 'Passage to Cape Bowling Green', detail: 'Early morning departure from Townsville. Arrival at the sanctuary zone mooring with afternoon orientation dive along the intact stern and rudder.' },
      { day: 'Day 02', title: 'Deep Hull & Bow Exploration', detail: 'Morning slack-water dive through the masts, galley skylights, and coral-carpeted superstructure. Sunset dive watching apex predators hunt.' },
      { day: 'Day 03', title: 'Dawn Pelagic Awakening & Return', detail: 'Dawn dive surrounded by schooling eagle rays and sea turtles grazing on soft sponges. Return passage under luxury sail.' },
    ],
    inclusions: ['Private vessel charter access inside the Marine Park Sanctuary', 'Custom wreck penetration briefings & historical 3D sonograms', 'Twin cylinder or stage setups available', 'Gourmet dining and sommelier beverage pairing'],
  },
  {
    id: 'fish-rock-cave-sanctuary',
    title: 'Fish Rock 125m Ocean Chimney',
    subtitle: "Southern Hemisphere's Longest Ocean Cavern",
    location: 'South West Rocks, New South Wales',
    region: 'Mid North Coast',
    category: 'Cave',
    depth: '12 – 28m',
    duration: '3 Days / 2 Nights',
    difficulty: 'Advanced',
    priceAUD: 2400,
    image: '/src/assets/images/fish_rock_cave_diver_1793824360021.jpg',
    highlights: ['125m horizontal underwater cavern with vertical chimney exit', 'Resident population of docile Grey Nurse Sharks', 'Spanish dancers, black coral trees, and vibrant zoanthid walls'],
    bestSeason: 'Year-Round (Best shark aggregation Oct–Apr)',
    groupSize: 'Max 6 Divers (1:3 Cave Guide Ratio)',
    certification: 'Advanced Open Water + Deep Specialty or Cavern',
    description: "Carved straight through a lonely granite pinnacle 2 kilometers offshore, Fish Rock Cave is a 125-meter swim-through cavern. Ascend through the vertical chimney into bubble caves and drift among dozens of prehistoric Grey Nurse Sharks.",
    itinerary: [
      { day: 'Day 01', title: 'Pinnacle Gutters & The Shallow Entrance', detail: 'Orientation dive along the Aquarium and Shark Gutters. Familiarization with cave line navigation and gas management protocols.' },
      { day: 'Day 02', title: 'Full 125m Cavern Traverse & Chimney Ascent', detail: 'Enter at 24 meters into the dark cavern. Ascend the natural vertical rock chimney into the glowing halo chamber filled with sleeping nurse sharks.' },
      { day: 'Day 03', title: 'Deep Boulder Drift & Pelican Point', detail: 'Exploration of the deep drop-offs and granite boulders where wobbegongs and schools of kingfish hunt in the current.' },
    ],
    inclusions: ['High-lumen primary and backup canister dive torches provided', 'Private zodiac tender and support crew', 'Coastal boutique lodge ocean-view villa accommodation', 'Private chef dining with local seafood and Australian produce'],
  },
  {
    id: 'great-barrier-outer-ribbon',
    title: 'Great Barrier Outer Ribbon Expedition',
    subtitle: 'Osprey Coral Sea Atoll & Cod Hole Private Voyage',
    location: 'Coral Sea & Far Northern GBR, Queensland',
    region: 'Great Barrier Reef',
    category: 'Reef',
    depth: '5 – 40m',
    duration: '7 Days / 6 Nights',
    difficulty: 'Beginner',
    priceAUD: 6800,
    image: '/assets/aistudio/herosection_background_b1167b9b.jfif',
    highlights: ['Crystal 50m visibility dropoffs at Osprey Reef', 'Friendly 100kg potato cod at world-famous Cod Hole', 'Sunbeams penetrating pristine acropora coral cathedrals'],
    bestSeason: 'September to January',
    groupSize: 'Max 10 Divers aboard 35m Catamaran',
    certification: 'Open Water to Technical (Personalized guide pairing)',
    description: "Venture 150 miles beyond the coast to the isolated Coral Sea atolls. Dive sheer vertical walls that plunge thousands of meters into the deep abyss, bathed in sunrays and teeming with untouched marine life.",
    itinerary: [
      { day: 'Days 01–02', title: 'Ribbon Reefs #3 to #10', detail: 'Cruising the sheltered inside lagoons and plunging reef walls. Encounters with giant potato cod, manta rays, and pristine hard coral gardens.' },
      { day: 'Days 03–05', title: 'Osprey Reef Atoll & North Horn', detail: 'Crossing the Coral Sea trench. High-voltage wall diving, schooling hammerhead sharks, silvertips, and 50-meter gin-clear water.' },
      { day: 'Days 06–07', title: 'Lizard Island & Aerial Seaplane Return', detail: 'Final morning reef dive and private champagne lunch at Lizard Island before scenic low-level reef flight back to Cairns.' },
    ],
    inclusions: ['Helicopter/seaplane flight over the Great Barrier Reef', 'Full luxury stateroom aboard The Odyssey Explorer', 'All nitrox gas blends & computer telemetry analysis', 'Unlimited guided day and night diving'],
  },
  {
    id: 'wolf-rock-grey-nurse',
    title: 'Wolf Rock Shark Citadel',
    subtitle: 'Submerged Volcanic Spires & Pelagic Apex Predators',
    location: 'Rainbow Beach, Queensland',
    region: 'Fraser Coast',
    category: 'Wildlife',
    depth: '18 – 36m',
    duration: '3 Days / 2 Nights',
    difficulty: 'Advanced',
    priceAUD: 2650,
    image: '/src/assets/images/ningaloo_whale_shark_1793824357940.jpg',
    highlights: ['Four dramatic underwater volcanic pinnacles', 'Mating and gestation grounds for Grey Nurse Sharks', 'Frequent visits from humpback whales and giant manta rays'],
    bestSeason: 'May to October',
    groupSize: 'Max 6 Divers',
    certification: 'Advanced Open Water (Min. 25 dives)',
    description: "Four jagged underwater volcanic spires jutting from the seabed, Wolf Rock is a critical marine sanctuary and breeding arena. Experience adrenaline-charged drift dives alongside dozens of resident sharks.",
    itinerary: [
      { day: 'Day 01', title: 'Western Pinnacle & Sand Gutter', detail: 'Descent onto the sheltered saddle where nurse sharks hover effortlessly in the surge.' },
      { day: 'Day 02', title: 'Deep Eastern Spire & Blue Water Drift', detail: 'Exploring the 36m deep wall where pelagic kingfish and manta rays patrol the open current.' },
      { day: 'Day 03', title: 'Photographic Dawn Dive', detail: 'Capturing iconic silhouette shots of sharks circling the spires in early morning golden light.' },
    ],
    inclusions: ['High-speed offshore vessel with dual redundant navigation', 'Full equipment sanitization & setup service', 'Private guide and marine safety technician', 'Luxury transfers from Sunshine Coast or Brisbane'],
  },
  {
    id: 'tasmanian-giant-kelp',
    title: 'Tasmanian Abyssal Kelp & Seadragons',
    subtitle: 'Temperate Cathedral Forests & Sub-Antarctic Water Clarity',
    location: 'Eaglehawk Neck, Tasmania',
    region: 'Tasmania',
    category: 'Technical',
    depth: '15 – 45m',
    duration: '4 Days / 3 Nights',
    difficulty: 'Technical',
    priceAUD: 3400,
    image: '/src/assets/images/fish_rock_cave_diver_1793824360021.jpg',
    highlights: ['Towering 20-meter giant kelp forest canopies', 'Encounter rare Weedy Seadragons and Handfish', 'Subterranean granite arches and crystalline 30m visibility'],
    bestSeason: 'December to May',
    groupSize: 'Max 4 Divers',
    certification: 'Drysuit Specialty / Advanced Open Water',
    description: "Dive into the ethereal, amber-hued cathedrals of the Southern Ocean. Glide beneath giant Macrocystis kelp fronds swaying in pristine Antarctic-origin currents, home to the elusive weedy seadragon.",
    itinerary: [
      { day: 'Day 01', title: 'Fortescue Bay & Kelp Fringe', detail: 'Drysuit buoyancy calibration and initial drift through shallow kelp nurseries.' },
      { day: 'Day 02', title: 'Deep Kelp Cathedral & The Blowhole', detail: 'Deep wall descent to 38m among ancient sponge gardens and majestic kelp pillars.' },
      { day: 'Day 03', title: 'Hippolyte Rocks Pelagic Dive', detail: 'Isolated offshore rock stacks populated by Australian fur seals and giant school sharks.' },
      { day: 'Day 04', title: 'Tasman Peninsula Coastal Trek & Disembark', detail: 'Final morning macro dive followed by private cellar door tasting of Tasmanian cool-climate pinot noir.' },
    ],
    inclusions: ['Heated Santi/Fourth Element drysuits and thermal undergarments', 'CCR rebreather O2/Sofnolime support if needed', 'Heated vessel saloon with hot freshwater showers', 'Luxury waterfront timber lodge retreat'],
  },
];

export interface DiveSiteLocation {
  id: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  depthRecreation: string;
  depthMax: string;
  seasonHighlights: string;
  defaultTemp: number;
  defaultVis: number;
  defaultSwell: number;
  defaultWind: number;
}

export const DIVE_SITES: DiveSiteLocation[] = [
  {
    id: 'cairns-gbr',
    name: 'Great Barrier Reef (Outer Ribbon)',
    region: 'Queensland',
    lat: -16.9186,
    lng: 145.7781,
    depthRecreation: '18m',
    depthMax: '40m',
    seasonHighlights: 'Nov–Dec: Coral Spawning & Manta season',
    defaultTemp: 27.5,
    defaultVis: 35,
    defaultSwell: 1.2,
    defaultWind: 14,
  },
  {
    id: 'ningaloo-reef',
    name: 'Ningaloo Reef (Exmouth)',
    region: 'Western Australia',
    lat: -21.9317,
    lng: 114.1245,
    depthRecreation: '15m',
    depthMax: '35m',
    seasonHighlights: 'Mar–Aug: Whale Shark & Humpback season',
    defaultTemp: 25.2,
    defaultVis: 30,
    defaultSwell: 1.4,
    defaultWind: 16,
  },
  {
    id: 'ss-yongala',
    name: 'SS Yongala Shipwreck',
    region: 'Queensland',
    lat: -19.3039,
    lng: 147.6225,
    depthRecreation: '24m',
    depthMax: '30m',
    seasonHighlights: 'Aug–Dec: Peak pelagic predator aggregations',
    defaultTemp: 26.8,
    defaultVis: 28,
    defaultSwell: 1.1,
    defaultWind: 12,
  },
  {
    id: 'fish-rock-cave',
    name: 'Fish Rock Cave (South West Rocks)',
    region: 'New South Wales',
    lat: -30.8872,
    lng: 153.0397,
    depthRecreation: '22m',
    depthMax: '32m',
    seasonHighlights: 'Oct–May: Grey Nurse Shark gatherings',
    defaultTemp: 22.4,
    defaultVis: 22,
    defaultSwell: 1.5,
    defaultWind: 15,
  },
  {
    id: 'eaglehawk-neck',
    name: 'Tasmanian Kelp (Eaglehawk Neck)',
    region: 'Tasmania',
    lat: -43.0167,
    lng: 147.9333,
    depthRecreation: '20m',
    depthMax: '45m',
    seasonHighlights: 'Jan–Apr: Highest water clarity & temperate kelp peak',
    defaultTemp: 16.0,
    defaultVis: 26,
    defaultSwell: 1.8,
    defaultWind: 18,
  },
];

export interface Vessel {
  id: string;
  name: string;
  type: string;
  length: string;
  capacity: string;
  range: string;
  cruisingSpeed: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
  amenities: string[];
  safetyKit: string[];
}

export const FLEET: Vessel[] = [
  {
    id: 'odyssey-explorer',
    name: 'The Odyssey Explorer',
    type: 'Luxury Expedition Power Catamaran',
    length: '35.4 Meters (116 ft)',
    capacity: '12 Expedition Guests · 8 Crew',
    range: '1,800 Nautical Miles',
    cruisingSpeed: '16 Knots',
    image: '/src/assets/images/luxury_expedition_vessel_1793824360334.jpg',
    description: 'Custom-commissioned for deep-ocean oceanic crossings. Features a dual hydraulic submersible dive platform, dedicated underwater photography dry lab with charging lockers, and private en-suite staterooms with panoramic ocean views.',
    specs: [
      { label: 'Beam', value: '10.2 Meters' },
      { label: 'Draft', value: '1.9 Meters (Reef-capable)' },
      { label: 'Engines', value: 'Twin MTU 1600 HP Marine Diesels' },
      { label: 'Gas Blending', value: 'Nitrox Membrane + Trimix Panel' },
      { label: 'Tenders', value: '2x 6.5m Zodiac MilPro Fast Inflatables' },
      { label: 'Decompression Chamber', value: 'Onboard Hyperlite Emergency Chamber' },
    ],
    amenities: [
      'Upper sundeck spa jacuzzi overlooking reef lagoons',
      'Dedicated air-conditioned cinema & dive debrief lounge',
      'Executive chef galley with walk-in wine cellar',
      'Private satellite Starlink high-speed connectivity',
      'Hydraulic stern swim & dive platform for effortless water entry',
    ],
    safetyKit: [
      'Dual 100% Medical Oxygen delivery circuits + demand valves',
      'Twin satellite EPIRBs & AIS MOB personal diver beacons',
      'Automated External Defibrillator (AED) on dive deck',
      'Full DAN commercial first response trauma kit',
    ],
  },
  {
    id: 'calypso-deep',
    name: 'MV Calypso Deep',
    type: 'Long-Range High-Speed Expedition Cruiser',
    length: '27.8 Meters (91 ft)',
    capacity: '8 Expedition Guests · 5 Crew',
    range: '1,200 Nautical Miles',
    cruisingSpeed: '22 Knots',
    image: '/src/assets/images/ss_yongala_shipwreck_1793824358224.jpg',
    description: 'Engineered for rapid offshore transit to remote shipwreck sites and outer reef walls. Equipped with advanced stabilization fins to guarantee velvet-smooth passage even across rolling open swells.',
    specs: [
      { label: 'Beam', value: '7.8 Meters' },
      { label: 'Draft', value: '1.6 Meters' },
      { label: 'Stabilizers', value: 'Seakeeper Gyro 26 Active Zero-Speed' },
      { label: 'Gas System', value: 'Continuous Nitrox 32% & 36%' },
      { label: 'Rebreather Station', value: '4 Dedicated CCR prep benches & booster' },
      { label: 'Tenders', value: '1x 5.8m Brig Eagle RIB' },
    ],
    amenities: [
      'Private master suite & 3 twin guest staterooms',
      'Wet bar & alfresco dining deck',
      'Custom camera rinse tanks with dual ultrasonic cleaners',
      'Heated deck showers with organic botanical amenities',
    ],
    safetyKit: [
      'Continuous hyperbaric dive watch telemetry',
      'Redundant VHF, SSB marine and satellite Iridium coms',
      'Surface marker buoys with strobe and GPS for every diver',
    ],
  },
  {
    id: 'triton-interceptor',
    name: 'Triton Apex RIB',
    type: 'Offshore Fast Pursuit & Day Expedition Vessel',
    length: '11.5 Meters (38 ft)',
    capacity: '6 Divers + 2 Skippers',
    range: '380 Nautical Miles',
    cruisingSpeed: '34 Knots',
    image: '/src/assets/images/fish_rock_cave_diver_1793824360021.jpg',
    description: 'Purpose-built for rapid deployment to elusive megafauna sightings, coastal cave dropoffs, and remote island pinnacles where maneuverability is paramount.',
    specs: [
      { label: 'Hull', value: 'Deep-V Aluminium Interceptor' },
      { label: 'Engines', value: 'Twin Yamaha 350HP Outboards' },
      { label: 'Boarding', value: 'Heavy-duty ergonomic dive ladder' },
      { label: 'Electronics', value: 'Simrad Dual 16" Chartplotter + 3D Chirp Sonar' },
    ],
    amenities: [
      'Shock-absorbing Ullman jockey seats',
      'Custom tank racks accommodating twinsets and stages',
      'Dry luggage storage compartment with USB-C power',
      'Freshwater rinse shower and sun canopy',
    ],
    safetyKit: [
      'Waterproof pelican O2 delivery case',
      'Emergency EPIRB and flares',
      'Direct line VHF radio to Coast Guard and base vessel',
    ],
  },
];

export interface GearItem {
  id: string;
  name: string;
  brand: string;
  category: 'Regulators' | 'BCDs' | 'Suits' | 'Computers' | 'Cameras' | 'Technical';
  dailyAUD: number;
  weeklyAUD: number;
  specs: string[];
  description: string;
  badge?: string;
}

export const RENTAL_GEAR: GearItem[] = [
  {
    id: 'apeks-mtx-rc',
    name: 'MTX-RC Extreme Cold & Deep Regulator',
    brand: 'Apeks Marine',
    category: 'Regulators',
    dailyAUD: 45,
    weeklyAUD: 220,
    badge: 'Expedition Grade',
    specs: ['Balanced diaphragm first stage', 'Over-molded endcaps preventing ice buildup', 'PVD satin coating', 'Includes secondary octopus and SPG'],
    description: 'Military-tested regulator engineered for extreme depth and sub-zero conditions. Effortless breathing resistance at any depth or tank pressure.',
  },
  {
    id: 'scubapro-mk25-s620',
    name: 'MK25 EVO / S620 Titanium System',
    brand: 'Scubapro',
    category: 'Regulators',
    dailyAUD: 48,
    weeklyAUD: 235,
    specs: ['Air-balanced piston design', 'Titanium barrel second stage', 'Dual high-pressure ports', 'Thermal Insulating System (XTIS)'],
    description: 'The global benchmark for high-performance breathing comfort. Ultra-fast breathing response delivers instant airflow on demand.',
  },
  {
    id: 'shearwater-teric',
    name: 'Teric Titanium OLED Wrist Computer',
    brand: 'Shearwater Research',
    category: 'Computers',
    dailyAUD: 35,
    weeklyAUD: 175,
    badge: 'Bioluminescent Display',
    specs: ['Vivid full-color AMOLED screen', 'Air, Nitrox, Trimix, CC/BO modes', 'Wireless air integration with Swift transmitter', '3-axis digital compass'],
    description: 'Intuitive operation with bright sapphire-crystal AMOLED display legible in complete abyssal dark. Bühlmann ZHL-16C decompression algorithm.',
  },
  {
    id: 'shearwater-perdix-2',
    name: 'Perdix 2 Ti Armored Computer',
    brand: 'Shearwater Research',
    category: 'Computers',
    dailyAUD: 38,
    weeklyAUD: 190,
    specs: ['Titanium bezel & piezo buttons', 'User-replaceable AA battery', 'Vibration alerts and 4-transmitter AI support', '260m depth rating'],
    description: 'The quintessential expedition computer for serious cave, wreck, and decompression diving with ultra-rugged titanium armoring.',
  },
  {
    id: 'halcyon-infinity-wing',
    name: 'Infinity Cinch Harness & Wing System',
    brand: 'Halcyon Manufacturing',
    category: 'BCDs',
    dailyAUD: 40,
    weeklyAUD: 195,
    specs: ['Stainless steel backplate', 'Cinch instant-adjustment harness', '30lb or 40lb Eclipse wing', 'Integrated ACB weight pockets'],
    description: 'Flawless horizontal trim in the water column. Streamlined profile eliminates water drag and provides effortless buoyancy control.',
  },
  {
    id: 'fourth-element-proteus',
    name: 'Proteus II 5mm / 7mm Semi-Dry Suit',
    brand: 'Fourth Element',
    category: 'Suits',
    dailyAUD: 30,
    weeklyAUD: 150,
    specs: ['Hydrolock inner neck seal', 'Glued and blind-stitched seams', 'Thermal lining throughout core', 'Anatomic pre-bent knees and arms'],
    description: 'The warmest semi-dry suit in the diving world. Near zero water exchange keeps your body temperature steady across 60-minute deep dives.',
  },
  {
    id: 'fourth-element-argonaut',
    name: 'Argonaut 3.0 Breathable Drysuit',
    brand: 'Fourth Element',
    category: 'Suits',
    dailyAUD: 65,
    weeklyAUD: 320,
    badge: 'Temperate / Deep',
    specs: ['Military-spec trilaminate fabric', 'Biomapping tailored fit', 'Silicone neck and wrist seals', 'Dual thigh tech cargo pockets'],
    description: 'Ultimate thermal barrier for deep Tasmanian waters and extended decompression dives. Fully breathable and flexible.',
  },
  {
    id: 'gates-cinema-rig',
    name: 'Gates Deep Weapon Cinema Rig',
    brand: 'Gates Underwater Products',
    category: 'Cameras',
    dailyAUD: 420,
    weeklyAUD: 2100,
    badge: 'Pro 8K Cinema',
    specs: ['Housing for RED V-Raptor / Monstro 8K', 'Precision glass dome port', 'Dual 30,000 lumen Keldan video lights', 'External 7" HD SDI monitor'],
    description: 'Hollywood and BBC documentary-grade underwater filming rig. Captures museum-quality 8K HDR underwater footage in high dynamic range.',
  },
  {
    id: 'revo-ccr-expedition',
    name: 'rEvo Micro FT CCR Rebreather Package',
    brand: 'rEvo Rebreathers',
    category: 'Technical',
    dailyAUD: 220,
    weeklyAUD: 1100,
    badge: 'Silent Bubble-Free',
    specs: ['Dual scrubber canisters', 'rMS scrubber monitoring system', 'Shearwater Petrel 3 controller', 'Silent bubble-free wildlife approach'],
    description: 'Enter the silent world. Closed-circuit technology eliminates exhaust bubbles, allowing unprecedented close-proximity wildlife encounters.',
  },
];

export interface LogbookEntry {
  diveNo: number;
  date: string;
  site: string;
  region: string;
  depthMeters: number;
  bottomTimeMin: number;
  tempCelsius: number;
  visibilityMeters: number;
  guide: string;
  diverName: string;
  diverRole: string;
  avatar: string;
  notes: string;
  image: string;
  category: 'Reef' | 'Wrecks' | 'Marine Life' | 'Night Dives' | 'Divers';
}

export const LOGBOOK_ENTRIES: LogbookEntry[] = [
  {
    diveNo: 842,
    date: '28 October 2026',
    site: 'Osprey Reef — North Horn Wall',
    region: 'Coral Sea, Queensland',
    depthMeters: 38.4,
    bottomTimeMin: 54,
    tempCelsius: 27.2,
    visibilityMeters: 45,
    guide: 'Captain Lachlan Vance',
    diverName: 'Elena Rostova',
    diverRole: 'Oceanographer & Guest Diver',
    avatar: 'ER',
    notes: "Sheer wall plunge into 1,000m deep sapphire trench. Schools of silver-tip sharks cruising the amphitheatre. Sunbeams cut through the water like cathedral glass. One of the purest ocean wildernesses left on the planet.",
    image: '/assets/aistudio/herosection_background_b1167b9b.jfif',
    category: 'Reef',
  },
  {
    diveNo: 839,
    date: '22 October 2026',
    site: 'Ningaloo Reef — Sandy Bay Trench',
    region: 'Western Australia',
    depthMeters: 22.8,
    bottomTimeMin: 68,
    tempCelsius: 24.8,
    visibilityMeters: 32,
    guide: 'Sienna Davies (Marine Biologist)',
    diverName: 'Marcus Lindqvist',
    diverRole: 'Underwater Cinematographer',
    avatar: 'ML',
    notes: "Encountered a 9-meter sub-adult male whale shark. He swam effortlessly beside our group for nearly twenty minutes over the hard coral plateau, with remoras trailing his pectoral fins. Complete serenity.",
    image: '/src/assets/images/ningaloo_whale_shark_1793824357940.jpg',
    category: 'Marine Life',
  },
  {
    diveNo: 834,
    date: '14 October 2026',
    site: 'SS Yongala — Bow & Forward Masts',
    region: 'Great Barrier Reef Marine Park',
    depthMeters: 29.5,
    bottomTimeMin: 46,
    tempCelsius: 26.5,
    visibilityMeters: 28,
    guide: 'Captain Lachlan Vance',
    diverName: 'Dr. Alistair Sterling',
    diverRole: 'Maritime Archaeologist',
    avatar: 'AS',
    notes: "The soft coral coverage on the port rail is thicker than ever. A pair of resident green sea turtles were grazing along the companionway while a tornado of giant trevally blocked out the sunlight above.",
    image: '/src/assets/images/ss_yongala_shipwreck_1793824358224.jpg',
    category: 'Wrecks',
  },
  {
    diveNo: 828,
    date: '04 October 2026',
    site: 'Fish Rock Cave — The 125m Chimney',
    region: 'South West Rocks, NSW',
    depthMeters: 24.0,
    bottomTimeMin: 58,
    tempCelsius: 21.8,
    visibilityMeters: 24,
    guide: 'Harrison Reed (Master Instructor)',
    diverName: 'Chloe Bennett',
    diverRole: 'Rescue Diver & Guest',
    avatar: 'CB',
    notes: "Entered the deep cavern mouth at 24m with torch beams slicing through the pitch black. Ascending the vertical chimney into the bubble chamber was transcendent. Eight Grey Nurse Sharks hovered gracefully around us.",
    image: '/src/assets/images/fish_rock_cave_diver_1793824360021.jpg',
    category: 'Divers',
  },
  {
    diveNo: 821,
    date: '25 September 2026',
    site: 'Ribbon Reef #10 — The Cod Hole',
    region: 'Northern Great Barrier Reef',
    depthMeters: 18.2,
    bottomTimeMin: 62,
    tempCelsius: 26.9,
    visibilityMeters: 38,
    guide: 'Sienna Davies',
    diverName: 'Julian Thorne',
    diverRole: 'Private Expedition Guest',
    avatar: 'JT',
    notes: "Diving alongside a 120kg friendly potato cod named Barney who was inquisitive and gentle. The coral bommies were alive with juvenile anthias and clownfish anemone clusters.",
    image: '/assets/aistudio/herosection_background_b1167b9b.jfif',
    category: 'Reef',
  },
  {
    diveNo: 815,
    date: '18 September 2026',
    site: 'Osprey Coral Sea — Midnight Blackwater',
    region: 'Coral Sea Trench (3,000m Depth Underneath)',
    depthMeters: 14.0,
    bottomTimeMin: 50,
    tempCelsius: 25.4,
    visibilityMeters: 50,
    guide: 'Captain Lachlan Vance',
    diverName: 'Valerie Dupuis',
    diverRole: 'Deep Sea Biologist',
    avatar: 'VD',
    notes: "Suspended in endless oceanic void with down-weighted line and strobes. Witnessed larval pelagic fish and glowing comb jellies pulsating in neon teal and gold. Alien architecture in our own oceans.",
    image: '/src/assets/images/ss_yongala_shipwreck_1793824358224.jpg',
    category: 'Night Dives',
  },
];
