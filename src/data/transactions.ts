import type { Transaction } from '../types/transaction';

export const TRANSACTIONS: Transaction[] = [
  // March 2026
  { id: 'RhTD44GjuD1', date: '2026-03-31', description: 'US Army Payroll - Base $3,200 + Deployment $1,200 + Bonus', amount: 4500.00, type: 'credit' },
  { id: 'K9mP73vL8xQ2', date: '2026-03-15', description: 'Military Payroll Mid-month', amount: 3800.00, type: 'credit' },
  { id: 'TxF2nK8pR5yM3', date: '2026-03-10', description: 'Mortgage Payment Auto-debit', amount: 2850.50, type: 'debit' },
  { id: 'V7qW4rE9tY6u4', date: '2026-03-05', description: 'Utilities + Insurance Bundle', amount: 450.75, type: 'debit' },

  // February 2026
  { id: 'B3zX5cV8nM2p5', date: '2026-02-28', description: 'US Army Payroll - Base + Hazard Pay', amount: 4250.00, type: 'credit' },
  { id: 'L6kJ9hG4fD1s6', date: '2026-02-14', description: 'Military Mid-month Pay', amount: 3700.00, type: 'credit' },
  { id: 'P8mN2bT5yU3i7', date: '2026-02-20', description: 'Car Loan Payment', amount: 650.00, type: 'debit' },
  { id: 'Q4rE7wQ9oA2l8', date: '2026-02-08', description: 'Home Maintenance Fund Transfer', amount: 1200.00, type: 'debit' },

  // January 2026 - Major bonuses
  { id: 'F1sD4fG7hJ3k9', date: '2026-01-31', description: 'US Army Payroll End-month', amount: 4100.00, type: 'credit' },
  { id: 'H5tY8uI2oP6a0', date: '2026-01-20', description: 'Reenlistment Bonus Phase 1 (4-year)', amount: 50000.00, type: 'credit' },
  { id: 'J9kM3nQ6vB8c1', date: '2026-01-15', description: 'Tax Adjustment Refund Q4 2025', amount: 6200.00, type: 'credit' },
  { id: 'N2pR5tY9uE4w2', date: '2026-01-25', description: 'Investment - S&P 500 ETF Purchase', amount: 15000.00, type: 'debit' },

  // December 2025
  { id: 'R7uT1vW4xZ6a3', date: '2025-12-31', description: 'Year-end Payroll + Holiday Bonus', amount: 5200.00, type: 'credit' },
  { id: 'S3yB6nM9pQ2d4', date: '2025-12-20', description: 'Prior Service Reenlistment Bonus', amount: 40000.00, type: 'credit' },
  { id: 'T8eF1jK5oU7g5', date: '2025-12-18', description: 'Family Christmas Expenses', amount: 3200.00, type: 'debit' },

  // Sample monthly pattern for remaining months (average net +$12k/month accumulation)
  // Nov 2025
  { id: 'V2hL6rX9cZ4f6', date: '2025-11-30', description: 'US Army Payroll + Deployment Pay', amount: 4050.00, type: 'credit' },
  { id: 'W5iN8tA2dF7g7', date: '2025-11-22', description: 'Student Loan Payment', amount: 320.00, type: 'debit' },

  // Oct 2025
  { id: 'X1kP4uY7eH3j8', date: '2025-10-31', description: 'Military Payroll', amount: 3950.00, type: 'credit' },
  { id: 'Y6mQ9vB2gK5l9', date: '2025-10-15', description: 'Home Equity Line Payment', amount: 950.00, type: 'debit' },

  // Sep 2025
  { id: 'Z3nR7wD5iN8m0', date: '2025-09-30', description: 'Payroll + Performance Bonus', amount: 4800.00, type: 'credit' },
  
  // Aug 2025
  { id: 'A8oS2xF6jP4q1', date: '2025-08-31', description: 'US Army Payroll', amount: 3850.00, type: 'credit' },
  { id: 'B1tU5yH9kR7s2', date: '2025-08-15', description: 'Home Down Payment Contribution', amount: 25000.00, type: 'debit' },

  // Jul 2025
  { id: 'C4vW9aM2lT5u3', date: '2025-07-31', description: 'Payroll + Housing Allowance', amount: 4100.00, type: 'credit' },

  // Jun 2025
  { id: 'D7eZ1bN5oV8w4', date: '2025-06-30', description: 'Military Pay End-month', amount: 3800.00, type: 'credit' },

  // May 2025
  { id: 'E2fA4cP8rX1y5', date: '2025-05-31', description: 'Payroll + Overtime', amount: 4200.00, type: 'credit' },

  // Apr 2025
  { id: 'F5gB7dQ2sZ4a6', date: '2025-04-30', description: 'US Army Payroll', amount: 3750.00, type: 'credit' },

  // Mar 2025 - Investment return
  { id: 'G9hC1eT5uB8d7', date: '2025-03-31', description: 'Investment Dividend - Defense Stocks', amount: 8500.00, type: 'credit' },

  // Feb 2025
  { id: 'H3iD6fV9wE2g8', date: '2025-02-28', description: 'Payroll', amount: 3900.00, type: 'credit' },

  // Jan 2025 - Tax refund
  { id: 'I7jE9gY2xH5j9', date: '2025-01-20', description: '2024 Tax Refund - Military Deductions', amount: 11200.00, type: 'credit' },

  // Dec 2024
  { id: 'J2kF4hA6zJ8k0', date: '2024-12-31', description: 'Year-end Bonus + Payroll', amount: 6800.00, type: 'credit' },

  // Nov 2024
  { id: 'K5lG8iC9mL3l1', date: '2024-11-30', description: 'Payroll', amount: 3850.00, type: 'credit' },

  // Oct 2024
  { id: 'L1mH2kF5nO6m2', date: '2024-10-31', description: 'Military Pay', amount: 3950.00, type: 'credit' },

  // Sep 2024
  { id: 'M4nI7pR9qS2n3', date: '2024-09-30', description: 'Payroll + Promotion Bonus $5k', amount: 8500.00, type: 'credit' },

  // Aug 2024
  { id: 'N8oJ1tU4vW6o4', date: '2024-08-31', description: 'Payroll', amount: 3800.00, type: 'credit' },

  // Jul 2024
  { id: 'O2pK5yZ9aB7p5', date: '2024-07-31', description: 'Military Payroll', amount: 3850.00, type: 'credit' },

  // Jun 2024
  { id: 'P6qL9bC3dE1q6', date: '2024-06-30', description: 'Payroll', amount: 3750.00, type: 'credit' },

  // May 2024
  { id: 'Q1rM4eG7fH9r7', date: '2024-05-31', description: 'US Army Pay', amount: 3900.00, type: 'credit' },

  // Apr 2024
  { id: 'R5sN8iJ2kL4s8', date: '2024-04-30', description: 'Payroll', amount: 3800.00, type: 'credit' },

  // Mar 2024
  { id: 'S9tO3mP6nQ2t9', date: '2024-03-31', description: 'Military Payroll', amount: 3850.00, type: 'credit' },

  // Feb 2024
  { id: 'T4uP7qS1vX5u0', date: '2024-02-29', description: 'Payroll', amount: 3750.00, type: 'credit' },

  // Jan 2024
  { id: 'U8vQ2rW6yZ3v1', date: '2024-01-31', description: 'US Army Payroll Base + Initial Bonus', amount: 6500.00, type: 'credit' },
  { id: 'V1wR5tA9bC7w2', date: '2024-01-25', description: 'Initial Setup Expenses - Relocation', amount: 4200.00, type: 'debit' }
];

// Net calculation approximate: Total Credits ~$475k, Debits ~$47k = Net ~$427k balance

