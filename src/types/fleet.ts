export interface Vessel {
  id: string;
  name: string;
  type: string;
  length: string;
  capacity: string;
  speed: string;
  range: string;
  features: string[];
  description: string;
  image: string;
  status: 'Active Deployment' | 'Charter Standby' | 'En Route';
}

export interface SafetyStandard {
  title: string;
  desc: string;
  iconName: string;
}

export interface FleetStat {
  value: string;
  label: string;
  sub: string;
  highlight?: boolean;
}
