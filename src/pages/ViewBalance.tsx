import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { motion } from 'framer-motion';
import { 
  Shield, 
  MapPin, 
  Phone, 
  Globe, 
  Wallet, 
  TrendingUp,
  User,
  Award,
  Star,
  Medal,
  BadgeCheck
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface Officer {
  id: number;
  rank: string;
  rankLevel: number;
  name: string;
  image: string;
  address: string;
  phone: string;
  country: string;
  walletBalance: number;
  badge: string;
}

const officers: Officer[] = [
  {
    id: 1,
    rank: "Admiral",
    rankLevel: 10,
    name: "James Mitchell",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    address: "1247 Naval Command Drive, Arlington, VA 22201",
    phone: "+1 (703) 555-0101",
    country: "United States",
    walletBalance: 2850000.00,
    badge: "5-Star Command"
  },
  {
    id: 2,
    rank: "Vice Admiral",
    rankLevel: 9,
    name: "Sarah Henderson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    address: "892 Pacific Fleet Way, San Diego, CA 92136",
    phone: "+1 (619) 555-0202",
    country: "United States",
    walletBalance: 1920000.00,
    badge: "Fleet Command"
  },
  {
    id: 3,
    rank: "Rear Admiral",
    rankLevel: 8,
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    address: "456 Atlantic Station, Norfolk, VA 23505",
    phone: "+1 (757) 555-0303",
    country: "Germany",
    walletBalance: 1450000.00,
    badge: "Task Force Lead"
  },
  {
    id: 4,
    rank: "Captain",
    rankLevel: 7,
    name: "Emily Rodriguez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    address: "789 USS Constitution Blvd, Boston, MA 02129",
    phone: "+1 (617) 555-0404",
    country: "Japan",
    walletBalance: 875000.00,
    badge: "Ship Command"
  },
  {
    id: 5,
    rank: "Commander",
    rankLevel: 6,
    name: "David Thompson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    address: "321 Destroyer Lane, Pearl Harbor, HI 96860",
    phone: "+1 (808) 555-0505",
    country: "South Korea",
    walletBalance: 620000.00,
    badge: "Department Head"
  },
  {
    id: 6,
    rank: "Lieutenant Commander",
    rankLevel: 5,
    name: "Jennifer Park",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    address: "654 Submarine Base Rd, Groton, CT 06340",
    phone: "+1 (860) 555-0606",
    country: "Italy",
    walletBalance: 445000.00,
    badge: "Division Officer"
  },
  {
    id: 7,
    rank: "Lieutenant",
    rankLevel: 4,
    name: "Robert Williams",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
    address: "987 Aviation Blvd, Pensacola, FL 32508",
    phone: "+1 (850) 555-0707",
    country: "Bahrain",
    walletBalance: 310000.00,
    badge: "Watch Officer"
  },
  {
    id: 8,
    rank: "Lieutenant Junior Grade",
    rankLevel: 3,
    name: "Amanda Foster",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    address: "147 Coastal Highway, Mayport, FL 32233",
    phone: "+1 (904) 555-0808",
    country: "Spain",
    walletBalance: 185000.00,
    badge: "Junior Officer"
  },
  {
    id: 9,
    rank: "Ensign",
    rankLevel: 2,
    name: "Christopher Lee",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face",
    address: "258 Officer Training Way, Newport, RI 02841",
    phone: "+1 (401) 555-0909",
    country: "United Kingdom",
    walletBalance: 95000.00,
    badge: "Commissioned"
  },
  {
    id: 10,
    rank: "Midshipman",
    rankLevel: 1,
    name: "Jessica Martinez",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face",
    address: "369 Naval Academy Dr, Annapolis, MD 21402",
    phone: "+1 (410) 555-1010",
    country: "United States",
    walletBalance: 42000.00,
    badge: "In Training"
  }
];

const getRankIcon = (rankLevel: number) => {
  if (rankLevel >= 8) return <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />;
  if (rankLevel >= 6) return <Award className="h-5 w-5 text-orange-500" />;
  if (rankLevel >= 4) return <BadgeCheck className="h-5 w-5 text-blue-500" />;
  return <Medal className="h-5 w-5 text-gray-500" />;
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

const totalBalance = officers.reduce((sum, officer) => sum + officer.walletBalance, 0);

export function ViewBalance() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-navy py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange rounded-full mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-white">
                Officer Balance Overview
              </h1>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                View wallet balances and deployment information for all active officers
                ranked from highest to lowest command level.
              </p>
            </motion.div>

            {/* Total Balance Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange p-4 rounded-xl">
                      <Wallet className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Total Fleet Balance</p>
                      <p className="text-white text-3xl lg:text-4xl font-bold">
                        {formatCurrency(totalBalance)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-white">{officers.length}</p>
                      <p className="text-gray-300 text-sm">Active Officers</p>
                    </div>
                    <div className="w-px h-12 bg-white/30" />
                    <div className="text-center">
                      <p className="text-3xl font-bold text-orange">
                        {formatCurrency(totalBalance / officers.length)}
                      </p>
                      <p className="text-gray-300 text-sm">Average Balance</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Officers List */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between mb-8"
            >
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-navy">
                  Officer Roster
                </h2>
                <p className="text-gray-600 mt-1">
                  Ranked by command authority level
                </p>
              </div>
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
                <TrendingUp className="h-4 w-4" />
                <span>Sorted by rank (highest first)</span>
              </div>
            </motion.div>

            {/* Desktop Table View */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              className="hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <table className="w-full">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Rank</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Officer</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Contact Info</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Deployment</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold">Wallet Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {officers.map((officer) => (
                    <motion.tr
                      key={officer.id}
                      variants={fadeInUp}
                      whileHover={{ backgroundColor: 'rgba(10, 61, 98, 0.02)' }}
                      className="transition-colors"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg">
                            {getRankIcon(officer.rankLevel)}
                          </div>
                          <div>
                            <p className="font-semibold text-navy">{officer.rank}</p>
                            <p className="text-xs text-gray-500">Level {officer.rankLevel}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center space-x-3">
                          <img
                            src={officer.image}
                            alt={officer.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                          />
                          <div>
                            <p className="font-semibold text-navy">{officer.name}</p>
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange/10 text-orange">
                              {officer.badge}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                            <span className="truncate max-w-[200px]">{officer.address}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Phone className="h-4 w-4 mr-2 text-gray-400" />
                            {officer.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center space-x-2">
                          <Globe className="h-4 w-4 text-link" />
                          <span className="text-sm font-medium text-navy">{officer.country}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <p className="text-xl font-bold text-navy">
                          {formatCurrency(officer.walletBalance)}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">USD</p>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Mobile Card View */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              className="lg:hidden space-y-4"
            >
              {officers.map((officer) => (
                <motion.div
                  key={officer.id}
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-sm p-5"
                >
                  {/* Header: Rank & Image */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={officer.image}
                        alt={officer.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                      />
                      <div>
                        <p className="font-bold text-navy">{officer.name}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          {getRankIcon(officer.rankLevel)}
                          <span className="text-sm font-medium text-gray-700">{officer.rank}</span>
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-orange/10 text-orange">
                      {officer.badge}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <div className="flex items-start text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{officer.address}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600">{officer.phone}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Globe className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600">{officer.country}</span>
                    </div>
                  </div>

                  {/* Balance */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Wallet className="h-5 w-5 text-orange" />
                      <span className="text-sm text-gray-500">Wallet Balance</span>
                    </div>
                    <p className="text-xl font-bold text-navy">
                      {formatCurrency(officer.walletBalance)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Summary Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 bg-navy rounded-xl p-6 text-white"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <User className="h-6 w-6 text-orange" />
                  <span className="text-gray-300">Total Officers on Record</span>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center md:text-right">
                    <p className="text-2xl font-bold">{officers.length}</p>
                    <p className="text-sm text-gray-400">Personnel</p>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div className="text-center md:text-right">
                    <p className="text-2xl font-bold text-orange">{formatCurrency(totalBalance)}</p>
                    <p className="text-sm text-gray-400">Combined Balance</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
