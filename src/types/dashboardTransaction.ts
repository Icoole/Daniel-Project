import type { ID } from './ID';

export interface DashboardTransaction {
  id: ID;
  name: string;
  type: string;
  amount: string;
  available: string;
  description: string;
  date: string; // Add date for sorting
}

