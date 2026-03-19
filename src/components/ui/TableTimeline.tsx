import React, { useState } from 'react';
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

interface TableTimelineProps {
  transactions: Transaction[];
}

const TableTimelineItem = ({ transaction, index }: { transaction: Transaction; index: number }) => {
  const isDeposit = transaction.type === 'Deposit';
  const Icon = isDeposit ? TrendingUp : ArrowDown;

  return (
    <motion.tr
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.02 }}
      className="hover:bg-slate-800/30 transition-colors duration-200 border-b border-slate-200/10 group"
    >
      <td className="py-3 px-4 w-32">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full shadow-md ${isDeposit ? 'bg-emerald-400/90' : 'bg-red-400/90'}`} />
          <Icon className={`w-4 h-4 ${isDeposit ? 'text-emerald-400' : 'text-red-400'}`} />
          <div>
            <div className="font-bold text-sm">{transaction.date}</div>
            <div className="text-xs text-muted-foreground font-mono">{transaction.type}</div>
          </div>
        </div>
      </td>
      <td className="py-3 px-4 flex-1 max-w-md">
        <div className="space-y-0.5">
          <div className="font-medium text-sm truncate">{transaction.counterparty}</div>
          {transaction.method && (
            <div className="text-xs text-muted-foreground font-mono">{transaction.method}</div>
          )}
          {transaction.reference && (
            <div className="text-xs text-slate-500 font-mono">#{transaction.reference}</div>
          )}
        </div>
      </td>
      <td className="py-3 px-4 w-32 text-right">
        <span className={`text-lg font-bold font-mono ${isDeposit ? 'text-emerald-400' : 'text-red-400'}`}>
          {isDeposit ? '+' : '-'}${Math.abs(transaction.amount).toLocaleString()}
        </span>
      </td>
    </motion.tr>
  );
};

export function TableTimeline({ transactions }: TableTimelineProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-slate-700/50 shadow-lg">
      <div className="p-4 pb-3 text-center">
        <h3 className="text-base font-bold text-slate-200 mb-4">Transaction History</h3>
      </div>
      <div className="p-4 text-center">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-slate-800/30">
                <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400 w-32">
                  Date & Type
                </th>
                <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400 flex-1 max-w-md">
                  Counterparty
                </th>
                <th className="py-2 px-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-400 w-32">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/10">
              {paginatedTransactions.map((transaction, index) => (
                <TableTimelineItem key={transaction.date} transaction={transaction} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {totalPages > 1 && (
        <div className="px-4 pb-4 flex justify-center gap-2">
          {Array.from({ length: Math.min(4, totalPages) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-lg text-xs font-mono border transition-all ${
                currentPage === page
                  ? 'bg-slate-700 border-slate-400 text-white shadow-md'
                  : 'border-slate-500/50 bg-slate-900/50 text-slate-300 hover:bg-slate-800/50'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
