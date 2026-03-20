import { useState, useEffect } from 'react';

import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, Shield, FileText } from 'lucide-react';
import type { Transaction } from '../types/transaction';
import { TRANSACTIONS as allTransactions } from '../../data/transactions';



export default function TransactionLedger() {
  const [filter, setFilter] = useState<'all' | 'credit' | 'debit'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const filteredTransactions = allTransactions.filter((tx) => {
    const matchesFilter = filter === 'all' || tx.type === filter;
    const matchesSearch = tx.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const totalBalance = allTransactions.reduce((sum, tx) => tx.type === 'credit' ? sum + tx.amount : sum - tx.amount, 0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD' 
    }).format(Math.abs(amount));
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getTypeVariant = (type: 'credit' | 'debit') => {
    return type === 'credit' ? 'outline' : 'destructive';
  };

  const handleSearch = () => {
    // Trigger re-filter
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Fidelity Bank</h1>
            <p className="text-sm text-slate-500">Member FDIC • Est. 2026</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm border border-slate-200 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">Help Center</a>
          </div>
        </div>

        {/* Balance Card */}
        <Card className="mb-8 overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 flex justify-between items-center flex-wrap gap-6">
            <div>
              <h3 className="text-xs uppercase tracking-wider font-medium text-slate-300 mb-2">Available Balance</h3>
              <div className="text-5xl font-bold text-white mb-3">{formatCurrency(totalBalance)}</div>
              <div className="flex gap-4 text-xs text-slate-300">
                <span>✓ Cleared funds</span>
                <span>🕒 Real-time</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-right">
              <div className="font-mono text-lg font-semibold text-white">•••• 7842 01•• ••23</div>
              <div className="text-xs text-slate-300 mt-1">Premier Checking • Personal</div>
            </div>
          </div>
        </Card>

        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="bg-slate-100 p-1 rounded-full flex">
            {(['all', 'credit', 'debit'] as const).map((f) => (
              <Button
                key={f}
                variant={filter === f ? 'default' : 'ghost'}
                className={`rounded-full px-4 py-1.5 mx-1 ${filter === f ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-200'}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All Transactions' : f.charAt(0).toUpperCase() + f.slice(1)}
              </Button>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="relative flex-1 max-w-md">
                <Input
                  placeholder="Search by description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-12"
                />

              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
            <Button onClick={handleSearch} size="sm" className="bg-slate-900 hover:bg-slate-800">Search</Button>
          </div>
        </div>

        {/* Transactions Table */}
        <Card className="overflow-hidden shadow-xl border-slate-200">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-28">Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="w-32">Category</TableHead>
                <TableHead className="text-right w-32">Amount</TableHead>
                <TableHead className="w-44">Status & Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-32 text-center text-slate-500">
                    No transactions match your criteria. Adjust filters to view your history.
                  </TableCell>
                </TableRow>
              ) : (
                filteredTransactions.map((tx) => {
                  const isCredit = tx.type === 'credit';
                  const amountStr = `${isCredit ? '+' : '-'}${formatCurrency(tx.amount)}`;
                  const amountClass = isCredit ? 'text-green-600 font-bold' : 'text-red-600 font-bold';
                  return (
                    <TableRow key={tx.id} className="hover:bg-slate-50/50 [>td:nth-child(1)]:bg-slate-50/50 [>td:nth-child(2)]:bg-blue-50/50 [>td:nth-child(3)]:bg-green-50/50 [>td:nth-child(4)]:bg-red-50/50 [>td:nth-child(5)]:bg-slate-50/50">


                      <TableCell>
                        <div className="font-semibold text-slate-900">{tx.description}</div>
                        <div className="text-xs text-slate-500 mt-1 font-mono">{tx.id}</div>
                      </TableCell>


                        <TableCell>
                          <Badge variant="secondary" className="text-xs">{tx.type.toUpperCase()}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <span className={amountClass}>{amountStr}</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1.5 items-center">
                            <Badge variant="default" className="text-xs">
                              Completed
                            </Badge>
                            <Badge variant={getTypeVariant(tx.type)} className="text-xs px-2 py-0.5">
                              {tx.type === 'credit' ? 'Deposit' : 'Payment'}
                            </Badge>
                          </div>
                        </TableCell>


                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-between text-xs text-slate-500">
            <span><Shield className="w-3.5 h-3.5 inline mr-1" />Bank-level encryption • PCI DSS compliant</span>
            <span><FileText className="w-3.5 h-3.5 inline mr-1" />Last 30 days activity</span>
          </div>
        </Card>
      </div>
    </div>
  );
}
