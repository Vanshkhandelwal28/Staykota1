export type Gender = 'Boys' | 'Girls' | 'Co-ed';

export type Hostel = {
  id: string;
  name: string;
  locality: string;
  distance: string;
  gender: Gender;
  price: number;
  roomLabel: string;
  accent: string;
  tags: string[];
  roomTypes: { label: string; price: number }[];
};

export const localities = ['Talwandi', 'Vigyan Nagar', 'Mahaveer Nagar', 'Rajeev Plaza', 'Indra Vihar', 'K Kunhadi'];

export const hostels: Hostel[] = [
  {
    id: 'demo-01', name: 'Shree Residency', locality: 'Talwandi', distance: '8 min walk to coaching hubs', gender: 'Boys', price: 6500, roomLabel: 'Double sharing', accent: 'terracotta', tags: ['Mess', 'Wi-Fi', 'Laundry'], roomTypes: [{ label: 'Triple sharing', price: 5200 }, { label: 'Double sharing', price: 6500 }, { label: 'Single room', price: 9200 }],
  },
  {
    id: 'demo-02', name: 'Sakuna Residence', locality: 'Vigyan Nagar', distance: '5 min walk to nearby institutes', gender: 'Girls', price: 8200, roomLabel: 'Single sharing', accent: 'peach', tags: ['Mess', 'CCTV', 'Warden'], roomTypes: [{ label: 'Double sharing', price: 6800 }, { label: 'Single sharing', price: 8200 }],
  },
  {
    id: 'demo-03', name: 'Career Point House', locality: 'Mahaveer Nagar', distance: '12 min walk to nearby institutes', gender: 'Boys', price: 5400, roomLabel: 'Triple sharing', accent: 'sage', tags: ['Wi-Fi', 'Mess', 'Power backup'], roomTypes: [{ label: 'Triple sharing', price: 5400 }, { label: 'Double sharing', price: 6900 }],
  },
  {
    id: 'demo-04', name: 'Green Courtyard Stay', locality: 'Indra Vihar', distance: '10 min walk to nearby institutes', gender: 'Co-ed', price: 5900, roomLabel: 'Double sharing', accent: 'blue', tags: ['AC rooms', 'Study area', 'Laundry'], roomTypes: [{ label: 'Triple sharing', price: 4900 }, { label: 'Double sharing', price: 5900 }],
  },
];

export type SearchFilters = { locality: string; budget: string; gender: string; sharing: string; food: boolean; ac: boolean };
export const defaultFilters: SearchFilters = { locality: 'Talwandi', budget: '₹5,000 – ₹9,000', gender: 'Any', sharing: 'Any sharing', food: false, ac: false };
