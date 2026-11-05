export type GearCategory = 'Regulators' | 'Computers' | 'BCDs' | 'Suits' | 'Cameras' | 'Technical';

export interface GearItem {
  id: string;
  name: string;
  brand: string;
  category: GearCategory;
  dailyAUD: number;
  specs: string[];
  description: string;
  image: string;
  isPopular?: boolean;
}

export interface RentalCartItem {
  item: GearItem;
  days: number;
  cost: number;
}
