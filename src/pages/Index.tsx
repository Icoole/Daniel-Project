import React, { useState } from "react";
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import BalanceCard from "@/components/BalanceCard";
import AccountHeader from "@/components/AccountHeader";
import { DashboardLogin } from './DashboardLogin';
import { useToast } from '@/hooks/use-toast';

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
  const [isPrivate, setIsPrivate] = useState(false);
  const [serviceNumber, setServiceNumber] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  const totalLiquidity =
    BASE_DATA.savings + BASE_DATA.checking + BASE_DATA.moneyMarket + BASE_DATA.certificates + BASE_DATA.ira;

  const handleLoginSuccess = (sn: string) => {
    setServiceNumber(sn);
    setIsAuthenticated(true);
    toast({
      title: 'Dashboard Unlocked',
      description: 'Welcome to your account balances.',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12 pb-16 flex-1">
          {!isAuthenticated ? (
            <DashboardLogin onSuccess={handleLoginSuccess} />
          ) : (
            <div className="bg-background text-foreground space-y-6">
              <AccountHeader
                name="MAJ Lucia Smith"
                rank="O-4"
                branch="US ARMY"
                serviceNumber={serviceNumber}
                mos="68W — Combat Medic"
                isPrivate={isPrivate}
                onTogglePrivacy={() => setIsPrivate(!isPrivate)}
              />
              <button 
                className="ml-4 bg-orange hover:bg-orange-dark text-white px-4 py-2 rounded-md text-sm font-semibold"
                onClick={() => {
                  setServiceNumber('');
                  setIsAuthenticated(false);
                  toast({
                    title: 'Logged Out',
                    description: 'Session ended due to inactivity.',
                  });
                }}
              >
                Log Out
              </button>

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
                    sparklineData={sparklines.savings}
                  />
                </motion.div>
                <motion.div variants={item}>
                  <BalanceCard
                    label="Withdrawable Immediately"
                    amount={isPrivate ? 0 : BASE_DATA.checking}
                    subtitle="Checking · No hold period"
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
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                <motion.div variants={item}>
                  <BalanceCard
                    label="Money Market"
                    amount={isPrivate ? 0 : BASE_DATA.moneyMarket}
                    subtitle="+4.1% APY · $2,500 min"
                    sparklineData={sparklines.moneyMarket}
                  />
                </motion.div>
                <motion.div variants={item}>
                  <BalanceCard
                    label="Share Certificates"
                    amount={isPrivate ? 0 : BASE_DATA.certificates}
                    subtitle="12-mo term · Matures Aug 2026"
                    sparklineData={sparklines.certificates}
                  />
                </motion.div>
                <motion.div variants={item}>
                  <BalanceCard
                    label="IRA Contributions"
                    amount={isPrivate ? 0 : BASE_DATA.ira}
                    subtitle="Roth IRA · YTD contrib $6,500"
                    sparklineData={sparklines.ira}
                  />
                </motion.div>
              </motion.div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;

