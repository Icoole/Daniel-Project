import type { ID } from './ID';

export interface Transaction {
  date: string;
  description: string;
  amount: number;
  type: 'debit' | 'credit';
  id: ID;
}

