import { useState } from 'react';
import { motion } from "framer-motion";

import AnimatedCounter from "@/components/AnimatedCounter";
import BalanceCard from "@/components/BalanceCard";
import AccountHeader from "@/components/AccountHeader";
import { DashboardLogin } from './DashboardLogin';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';

import { TableTimeline } from '@/components/ui/TableTimeline';


const BASE_DATA = {
  savings: 220000.75,
  checking: 85000.25,
  moneyMarket: 45000.00,
  certificates: 32500.50,
  ira: 28500.80,
};

const sparklines = {
  savings: [218000, 219000, 219500, 220000, 219800, 219900, 220000],
  checking: [84500, 85000, 84800, 85200, 85050, 84900, 85000],
  moneyMarket: [44500, 44800, 45000, 44900, 45000, 44950, 45000],
  certificates: [32200, 32400, 32500, 32450, 32500, 32520, 32500],
  ira: [28000, 28200, 28400, 28450, 28500, 28530, 28500],
};

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
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Index = () => {
  const { isAuthenticated, serviceNumber, login } = useAuth();
  const [isPrivate, setIsPrivate] = useState(false);
  const { toast } = useToast();

  const totalLiquidity =
    BASE_DATA.savings + BASE_DATA.checking + BASE_DATA.moneyMarket + BASE_DATA.certificates + BASE_DATA.ira;

  const handleLoginSuccess = (sn: string) => {
    login(sn);
    toast({
      title: 'Dashboard Unlocked',
      description: 'Welcome to your account balances.',
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12 pb-16">
      {!isAuthenticated ? (
        <DashboardLogin onSuccess={handleLoginSuccess} />
      ) : (
        <div className="bg-background text-foreground space-y-6 p-4 md:p-8 rounded-2xl shadow-lg"> 
          <AccountHeader
            name="Lucia"
            rank="O-4"
            branch="US ARMY"
            serviceNumber={serviceNumber || "CCN-25-015"}
            mos="68W — Combat Medic"
            isPrivate={isPrivate}
            onTogglePrivacy={() => setIsPrivate(!isPrivate)}
          />

          {/* L1: Total Combined Liquidity */}
          <motion.header
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12 space-y-2"
          >
            <p className="text-muted-foreground uppercase tracking-label text-xs font-semibold">
              Total Combined Liquidity
            </p>
            {isPrivate ? (
              <h1 className="text-6xl sm:text-7xl font-bold tracking-display font-mono">
                $•••,•••<span className="text-balance-cents">.••</span>
              </h1>
            ) : (
              <h1 className="text-6xl sm:text-7xl font-bold tracking-display">
                <AnimatedCounter value={totalLiquidity} />
              </h1>
            )}
            <p className="text-xs text-muted-foreground font-mono">
              Last synced: {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} · {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
            </p>
          </motion.header>

          {/* L2: Account Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
          >
            <motion.div variants={item}>
              <BalanceCard
                label="Savings Account"
                amount={isPrivate ? 0 : BASE_DATA.savings}
                subtitle="+2.4% APY"
                colorScheme="savings"
                sparklineData={sparklines.savings}
              />
            </motion.div>
            <motion.div variants={item}>
              <BalanceCard
                label="Withdrawable Immediately"
                amount={isPrivate ? 0 : BASE_DATA.checking}
                subtitle="Checking · No hold period"
                colorScheme="checking"
                showAction
                actionLabel="Initiate Transfer"
                sparklineData={sparklines.checking}
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
          >
            <motion.div variants={item}>
              <BalanceCard
                label="Money Market"
                amount={isPrivate ? 0 : BASE_DATA.moneyMarket}
                subtitle="+4.1% APY · $2,500 min"
                colorScheme="money"
                sparklineData={sparklines.moneyMarket}
              />
            </motion.div>
            <motion.div variants={item}>
              <BalanceCard
                label="Share Certificates"
                amount={isPrivate ? 0 : BASE_DATA.certificates}
                subtitle="12-mo term · Matures Aug 2026"
                colorScheme="certificates"
                sparklineData={sparklines.certificates}
              />
            </motion.div>
            <motion.div variants={item}>
              <BalanceCard
                label="IRA Contributions"
                amount={isPrivate ? 0 : BASE_DATA.ira}
                subtitle="Roth IRA · YTD contrib $6,500"
                colorScheme="ira"
                sparklineData={sparklines.ira}
              />
            </motion.div>
          </motion.div>

                <TableTimeline transactions={PAYMENT_HISTORY.slice(0, 6)} />
        </div>
      )}
    </div>
  );
};


export default Index;
