import { motion } from "framer-motion";
import { TrendingUp, ArrowDown } from "lucide-react";

interface Transaction {
  date: string;
  type: 'Deposit' | 'Withdrawal';
  amount: number;
  balance: number;
  counterparty?: string;
  method?: string;
  reference?: string;
}

interface TimelineProps {
  transactions: Transaction[];
}

const TimelineItem = ({ transaction, index }: { transaction: Transaction; index: number }) => {
  const isDeposit = transaction.type === 'Deposit';
  const Icon = isDeposit ? TrendingUp : ArrowDown;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group relative"
    >
      <div className="flex items-center gap-3 p-2 mb-2 bg-gray-900/60 border border-gray-500/60 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.005] transition-all duration-200 h-10">
        {/* Timeline connector */}
        <div className="absolute left-4 top-6 w-0.5 h-10 bg-gray-500/60" />
        
        {/* Date badge */}
        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg border border-white/40 flex flex-col items-center justify-center text-xs font-mono text-gray-200">
          <div className="font-bold text-xs">{transaction.date.slice(0,3)}</div>
          <div className="text-[10px]">{transaction.date.slice(4)}</div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 pr-2">
          <div className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full shadow-md ${isDeposit ? 'bg-green-400/90' : 'bg-red-400/90'}`} />
            <Icon className={`w-3 h-3 ${isDeposit ? 'text-green-400' : 'text-red-400'}`} />
            <h3 className="font-bold text-xs truncate">{transaction.type}</h3>
          </div>
        </div>

        {/* Balance */}
        <div className="text-right pr-1">
          <div className="text-sm font-mono text-gray-100 bg-gray-800/70 px-1.5 py-0.5 rounded-lg border border-gray-600/70 text-xs">
            ${transaction.balance.toLocaleString()}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function Timeline({ transactions }: TimelineProps) {
  return (
    <div className="space-y-1.5">
      {transactions.map((transaction, index) => (
        <TimelineItem key={index} transaction={transaction} index={index} />
      ))}
    </div>
  );
}
