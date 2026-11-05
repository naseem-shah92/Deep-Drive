import { GearItem } from '../types/gear';

export const RENTAL_GEAR: GearItem[] = [
  // Regulators
  {
    id: 'halcyon-halo-reg',
    name: 'Halcyon Halo Balanced Regulator System',
    brand: 'Halcyon Manufacturing',
    category: 'Regulators',
    dailyAUD: 65,
    specs: ['Balanced Diaphragm 1st Stage', 'Ultra-low work of breathing (WOB)', '300 Bar DIN', 'Cold-water sealed'],
    description: 'Military-grade environmental seal, ultra-smooth breath response at depth. Calibrated to 0.5 J/L breathing work.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    isPopular: true,
  },
  {
    id: 'apeks-xtx200-tungsten',
    name: 'Apeks XTX200 Tungsten Titanium Core',
    brand: 'Apeks Marine',
    category: 'Regulators',
    dailyAUD: 75,
    specs: ['PVD Tungsten Physical Vapour Finish', 'Micro-adjustable cracking effort', 'Nitrox compatible up to 40%'],
    description: 'Indestructible titanium-vapor coated chassis engineered for extreme depth exploration and zero corrosion.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
  },

  // Computers
  {
    id: 'shearwater-teric',
    name: 'Shearwater Teric OLED Titanium Watch',
    brand: 'Shearwater Research',
    category: 'Computers',
    dailyAUD: 55,
    specs: ['Full Color AMOLED Sapphire Display', 'Bühlmann ZHL-16C with GF', 'Wireless Air Integration', 'Tech Deco & CCR modes'],
    description: 'The golden standard in technical and expedition diving telemetry. Crisp 1.39" AMOLED readability even in pitch-black caves.',
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=600&q=80',
    isPopular: true,
  },
  {
    id: 'shearwater-perdix-2',
    name: 'Shearwater Perdix 2 Ti Deep Telemetry',
    brand: 'Shearwater Research',
    category: 'Computers',
    dailyAUD: 60,
    specs: ['Titanium Armor Bezel', 'Piezoelectric Haptic Alarms', 'Multi-Gas Trimix Ready', '260m Depth Rating'],
    description: 'Rugged titanium housing with vivid 2.2" display and dual wireless tank pressure transmitters.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80',
  },

  // BCDs
  {
    id: 'halcyon-infinity-wing',
    name: 'Halcyon Infinity Carbon Fiber Backplate & Wing',
    brand: 'Halcyon Manufacturing',
    category: 'BCDs',
    dailyAUD: 50,
    specs: ['Ultralight Aerospace Carbon Backplate', 'Cinch Quick-Adjust Harness', '30lb Wing Lift Capacity', 'Integrated ACB Weight Pockets'],
    description: 'Streamlined zero-drag buoyancy system. Carbon fiber backplate provides surgical horizontal trim control.',
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=600&q=80',
    isPopular: true,
  },
  {
    id: 'scubapro-hydros-pro',
    name: 'Scubapro Hydros Pro Monprene System',
    brand: 'Scubapro',
    category: 'BCDs',
    dailyAUD: 45,
    specs: ['Instant Dry Monprene Gel', 'Modular 2-in-1 Design', 'Ergonomic Body Molded', 'Zero Water Retention'],
    description: 'Patented injection-molded harness that molds to your torso and dries instantly between remote wall dives.',
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=600&q=80',
  },

  // Suits
  {
    id: 'fourth-element-proteus-ii',
    name: 'Fourth Element Proteus II 5mm Steamer',
    brand: 'Fourth Element UK',
    category: 'Suits',
    dailyAUD: 35,
    specs: ['Hydrolock Inner Neck Seal', 'Fused Seams with Hexcore Lining', 'Thermoflex 4-way stretch', 'Temperature Range: 19°C – 26°C'],
    description: 'Eliminates internal water flushing completely. Performs with the thermal efficiency of many 7mm suits without restricting motion.',
    image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bare-evoke-ultrawarmth',
    name: 'Bare Evoke 7mm Celliant Omnired Tech Suit',
    brand: 'Bare Sports',
    category: 'Suits',
    dailyAUD: 40,
    specs: ['Celliant Infrared Fabric Technology', 'Seamless Underarms', 'Extra-long Heavy-duty Rear Zipper', 'Temp Range: 14°C – 22°C'],
    description: 'Infrared reactive mineral fibers convert body heat into thermal energy, extending your bottom time in southern ocean currents.',
    image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&w=600&q=80',
  },

  // Cameras
  {
    id: 'nauticam-sony-a1-rig',
    name: 'Nauticam Cine Rig: Sony A1 8K Underwater System',
    brand: 'Nauticam & Sony Pro',
    category: 'Cameras',
    dailyAUD: 280,
    specs: ['Sony Alpha 1 50MP / 8K 30p', 'Dual Inon Z330 Strobes (110 Guide No)', 'Vacuum Leak Detection Seal', '230mm Optical Glass Dome Port'],
    description: 'Broadcast documentary imaging platform. Includes dual 15,000-lumen high-CRI video lights for cinematic underwater filming.',
    image: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=600&q=80',
    isPopular: true,
  },
  {
    id: 'keldan-8x-video-light',
    name: 'Keldan 8X 18,000 Lumen Oceanic Video Arrays',
    brand: 'Keldan Lights Switzerland',
    category: 'Cameras',
    dailyAUD: 95,
    specs: ['18,000 True Lumens per head', '96 CRI Color Rendering', '110° Beam in Water', 'Modular Diffuser Domes'],
    description: 'Swiss optical engineering producing pristine, sun-identical light spectrum down to 60 meters.',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=600&q=80',
  },

  // Technical
  {
    id: 'jj-ccr-rebreather',
    name: 'JJ-CCR Closed Circuit Rebreather System',
    brand: 'JJ-CCR International',
    category: 'Technical',
    dailyAUD: 220,
    specs: ['Redundant HUD Primary Display', 'Radial Axial Scrubber', 'Petrel 3 Hardwired Controller', 'Silent bubble-free wildlife approach'],
    description: 'Silent closed-circuit rebreather allows up to 3 hours of peaceful dive time without bubbles scaring marine life. (CCR certified only).',
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'scooter-bonex-discovery',
    name: 'Bonex Discovery RS High-Speed DPV Scooter',
    brand: 'Bonex Germany',
    category: 'Technical',
    dailyAUD: 140,
    specs: ['85m/min Top Speed', '200m Depth Rating', 'Lithium-Manganese 520Wh Cell', 'Run Time: 210 mins'],
    description: 'German titanium underwater propulsion scooter. Effortlessly glide across entire shipwrecks and long cave passages.',
    image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&w=600&q=80',
  },
];
