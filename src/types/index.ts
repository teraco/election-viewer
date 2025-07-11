export interface Candidate {
  id: string;
  prefecture: string;
  district: string;
  name: string;
  party: string;
  probability: number;
  updatedAt: string;
}

export interface Prefecture {
  name: string;
  districts: string[];
}