import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TableTimeline } from '@/components/ui/TableTimeline';
import { motion } from 'framer-motion';

interface Transaction {
  date: string;
  type: 'Deposit' | 'Withdrawal';
  amount: number;
  balance: number;
  counterparty?: string;
  method?: string;
  reference?: string;
}

const PAYMENT_HISTORY: Transaction[] = [
  { date: 'Feb 1, 2026', type: 'Deposit', amount: 5200, balance: 333500, counterparty: 'US Army Payroll', method: 'Direct Deposit', reference: 'PAYROLL-202602' },
  { date: 'Jan 1, 2026', type: 'Deposit', amount: 5100, balance: 328300, counterparty: 'US Army Payroll', method: 'Direct Deposit', reference: 'PAYROLL-202601' },
  { date: 'Dec 1, 2025', type: 'Deposit', amount: 4700, balance: 323200, counterparty: 'Dividend Payment', method: 'ACH', reference: 'DIV-IRA-2512' },
  { date: 'Nov 1, 2025', type: 'Deposit', amount: 5800, balance: 318500, counterparty: 'US Army Payroll', method: 'Direct Deposit', reference: 'PAYROLL-202511' },
  { date: 'Oct 1, 2025', type: 'Deposit', amount: 4200, balance: 312700, counterparty: 'Tax Refund', method: 'ACH', reference: 'IRS-REFUND-2025' },
  { date: 'Sep 1, 2025', type: 'Deposit', amount: 5500, balance: 308500, counterparty: 'US Army Payroll', method: 'Direct Deposit', reference: 'PAYROLL-202509' },
  { date: 'Aug 15, 2025', type: 'Withdrawal', amount: -80000, balance: 303000, counterparty: 'Home Purchase', method: 'Wire Transfer', reference: 'MTG-DOWNPAY-850815' },
  { date: 'Jul 1, 2025', type: 'Deposit', amount: 6400, balance: 383000, counterparty: 'US Army Payroll', method: 'Direct Deposit', reference: 'PAYROLL-202507' },
  { date: 'Jun 1, 2025', type: 'Deposit', amount: 5100, balance: 376600, counterparty: 'Interest Payment', method: 'ACH', reference: 'INT-MM-202506' },
  { date: 'May 1, 2025', type: 'Deposit', amount: 7200, balance: 371500, counterparty: 'US Army Payroll', method: 'Direct Deposit', reference: 'PAYROLL-202505' },
  { date: 'Apr 1, 2025', type: 'Deposit', amount: 3800, balance: 364300, counterparty: 'Bonus Payment', method: 'ACH', reference: 'BONUS-202504' },
  { date: 'Mar 1, 2025', type: 'Deposit', amount: 6000, balance: 360500, counterparty: 'US Army Payroll', method: 'Direct Deposit', reference: 'PAYROLL-202503' },
  { date: 'Feb 1, 2025', type: 'Deposit', amount: 4500, balance: 354500, counterparty: 'IRA Contribution', method: 'ACH', reference: 'IRA-CONTRIB-2502' },
  { date: 'Jan 1, 2025', type: 'Deposit', amount: 5000, balance: 350000, counterparty: 'US Army Payroll', method: 'Direct Deposit', reference: 'PAYROLL-202501' },
] as Transaction[];

export default function PaymentHistory() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p>Log in to view payment history.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 pt-8 pb-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold tracking-tight">Payment History</CardTitle>
          <p className="text-muted-foreground text-sm">Complete transaction history across all accounts</p>
        </CardHeader>
        <CardContent className="p-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-8 backdrop-blur-xl bg-gradient-to-b from-black/20 to-transparent rounded-3xl border border-cyan-500/30 shadow-2xl"
          >
            <TableTimeline transactions={PAYMENT_HISTORY} />
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
