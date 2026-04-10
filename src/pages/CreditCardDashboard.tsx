import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/hooks/useAuth';
import { DashboardLogin } from '@/pages/DashboardLogin';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Transaction } from '@/types/transaction';
import { TRANSACTIONS } from '@/data/transactions';
import type { DashboardTransaction } from '@/types/dashboardTransaction';
import { TableTimeline } from '@/components/ui/TableTimeline';
import { useToast } from '@/hooks/use-toast';

const CreditCardDashboard = () => {
  const { toast } = useToast();
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllResults, setShowAllResults] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
const [paymentAmount, setPaymentAmount] = useState('245');
  const [selectedAccount, setSelectedAccount] = useState('checking');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleLoginSuccess = (sn: string) => {
    login(sn);
  };

  if (!isAuthenticated) {
    return <DashboardLogin onSuccess={handleLoginSuccess} />;
  }

  const transactions: DashboardTransaction[] = TRANSACTIONS
    .map((t: Transaction) => ({
      id: t.id,
      name: t.description.split(' - ')[0] || t.description,
      type: t.type === 'credit' ? 'Credit' : 'Debit',
      amount: `${t.type === 'credit' ? '+' : '-'}$${t.amount.toFixed(2)}`,
      available: `Posted ${t.date}`,
      description: t.description,
      date: t.date
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // newest first

  const filteredTransactions = transactions.filter(tx =>
    tx.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tx.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tx.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tx.available.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentTransactions = filteredTransactions.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  const handleActionClick = (action: string) => {
    if (action === 'Statements') {
      navigate('/payment-history');
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 md:py-8 lg:py-10 max-w-6xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-navy to-navy-light rounded-3xl rounded-b-none p-6 md:p-8 lg:p-10 mb-0 shadow-2xl">
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <button 
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all duration-200 flex-shrink-0"
            onClick={() => navigate(-1)}
          >
            ←
          </button>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide text-white">MOREWARDS</h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
          {/* Balance Card */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3 text-sm opacity-80">
              <span className="text-white">Current Balance</span>
              <div className="w-4 h-4 border border-white/60 rounded-full flex items-center justify-center text-xs font-bold">i</div>
            </div>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white">$</span>
              <span className="text-5xl md:text-6xl lg:text-7xl xl:text-[4rem] font-light text-white">601,234</span>
              <span className="text-3xl md:text-4xl lg:text-5xl text-white/90">.56</span>
            </div>
            <Progress value={34} className="h-1.5 [&>div]:bg-green-500 mb-3" />
            <div className="text-xs md:text-sm text-white/90 mb-1">Available Credit: $398,765.44 of $1,000,000.00</div>
            <div className="text-xs md:text-sm text-white/70">Total Pending Amount: $608,154.56</div>
          </div>

          {/* Payment Button */}
          <Dialog open={isPaymentOpen} onOpenChange={setIsPaymentOpen}>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange to-orange-dark hover:from-orange-dark hover:to-orange text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 self-start lg:self-center whitespace-nowrap"
              >
                Make Payment
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Make a Payment</DialogTitle>
                <DialogDescription>
                  Enter the payment amount and select your source account.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="amount" className="text-sm font-medium">Amount</label>
                  <Input
                    id="amount"
                    placeholder="$0.00"
                    type="number"
                    step="0.01"
                    className="w-full"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="account" className="text-sm font-medium">From Account <span className="text-destructive">*</span></label>
                  <Select value={selectedAccount} onValueChange={setSelectedAccount} required>
                    <SelectTrigger id="account">
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
<SelectItem value="checking">Checking ($124,056.78)</SelectItem>
                      <SelectItem value="savings">High-Yield Savings ($601,634.52)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">Cancel</Button>
                </DialogClose>
                <Button 
                  disabled={!paymentAmount || !selectedAccount}
                  onClick={() => {
                    setIsPaymentOpen(false);
toast({ variant: "destructive", title: "Error", description: "Contact Your Admin Supervisor For Witdrawals, witdrawal/s not available in your Region" });
                    setPaymentAmount('');
                    setSelectedAccount('checking');
                  }}
                >
                  Confirm Payment
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl rounded-t-none -mt-4 p-6 md:p-8 lg:p-10 shadow-2xl">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer border-0 bg-white" onClick={() => navigate('/credit-cards')}>
            <CardContent className="p-0 flex flex-col md:flex-row md:items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue font-bold text-lg mx-auto md:mx-0">
                ⚙️
              </div>
              <div>
                <div className="font-semibold text-lg text-navy mb-1">Manage Cards</div>
                <div className="text-sm text-muted-foreground">View and manage</div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer border-0 bg-white" onClick={() => handleActionClick('Statements')}>
            <CardContent className="p-0 flex flex-col md:flex-row md:items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green font-bold text-lg mx-auto md:mx-0">
                📄
              </div>
              <div className="flex-1">
                <div className="font-semibold text-lg text-navy mb-1">Statements</div>
                <div className="text-sm text-muted-foreground">View statements</div>
                <Button variant="link" className="p-0 h-auto text-orange hover:text-orange-dark text-sm font-medium -mt-1 block md:inline" onClick={(e) => { e.stopPropagation(); navigate('/payment-history'); }}>
                  View monthly
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border-0 bg-white">
            <CardContent className="p-0 flex flex-col md:flex-row md:items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto md:mx-0 shadow-md">
                🎁
              </div>
              <div>
                <div className="text-xl lg:text-2xl font-bold text-navy mb-1">26,760 pts</div>
                <div className="text-sm font-semibold text-emerald uppercase tracking-wide">Rewards</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border mb-4 md:mb-6">
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground text-lg">🔍</span>
            <Input 
              placeholder="Search by transaction description, ID, or date" 
              className="border-none bg-transparent h-auto py-0 flex-1 text-lg placeholder:text-muted-foreground focus-visible:ring-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && filteredTransactions.length > 0 && !showAllResults && (
              <button
                onClick={() => setShowAllResults(true)}
                className="ml-2 px-4 py-1.5 bg-orange text-white text-sm font-medium rounded-lg hover:bg-orange-dark transition-all duration-200 whitespace-nowrap"
              >
                View All ({filteredTransactions.length})
              </button>
            )}
          </div>
        </div>
        {searchQuery && (
          <p className="text-xs text-muted-foreground mb-4 pl-1">
            {filteredTransactions.length} {filteredTransactions.length === 1 ? 'result' : 'results'} found. Only posted transactions will display in search results.
          </p>
        )}

        {/* Transactions */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <CardHeader className="p-6 pb-4 border-b border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-muted-foreground rounded-full flex items-center justify-center text-xs font-bold">i</div>
              <CardTitle className="text-lg font-semibold text-muted-foreground">History</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0 bg-cream/50">
            {showAllResults ? (
              <div>
                <TableTimeline 
                  transactions={filteredTransactions.map((tx) => ({
                    date: tx.date,
                    description: tx.description,
                    amount: parseFloat(tx.amount.replace(/[+$]/g, '')),
                    type: tx.amount.startsWith('+') ? 'credit' : 'debit',
                    id: tx.id
                  } satisfies Transaction))} 
                />
                <div className="p-6 pt-0 flex justify-center">
                  <button 
                    onClick={() => setShowAllResults(false)}
                    className="px-6 py-2 bg-navy text-white text-sm font-medium rounded-lg hover:bg-navy-dark transition-all duration-200"
                  >
                    ← Back to Summary
                  </button>
                </div>
              </div>
            ) : (
              <>
                {currentTransactions.map((tx: DashboardTransaction, index: number) => (
                  <div key={tx.id} className="flex items-center p-6 hover:bg-orange/10 transition-colors border-b border-border/20 last:border-b-0">
                    <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold uppercase text-sm tracking-wide text-navy truncate">{tx.name} <span className="text-xs font-mono text-muted-foreground">({tx.id})</span></div>
                      <div className="text-xs text-muted-foreground capitalize">{tx.type}</div>
                    </div>
                    <div className="text-right ml-4 flex-shrink-0">
                      <div className="font-bold text-lg text-emerald">{tx.amount}</div>
                      <div className="text-xs text-muted-foreground">{tx.available}</div>
                    </div>
                  </div>
                ))}
                {filteredTransactions.length === 0 && !showAllResults && (
                  <div className="p-12 text-center text-muted-foreground">
                    No matching transactions found.
                  </div>
                )}
                {!showAllResults && totalPages > 1 && (
                  <div className="p-6 flex justify-end">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button 
                          key={page}
                          className={`px-3 py-1 rounded hover:bg-muted font-medium ${currentPage === page ? 'bg-primary text-primary-foreground shadow-sm' : ''}`}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </button>
                      ))}
                      <button 
                        className="px-3 py-1 rounded hover:bg-muted font-medium" 
                        onClick={() => setCurrentPage(currentPage + 1)} 
                        disabled={currentPage >= totalPages}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreditCardDashboard;

