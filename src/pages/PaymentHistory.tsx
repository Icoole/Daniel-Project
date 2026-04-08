import { useAuth } from '@/hooks/useAuth';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TableTimeline } from '@/components/ui/TableTimeline';

import { TRANSACTIONS } from '../data/transactions';

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
            <TableTimeline transactions={TRANSACTIONS} />
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
