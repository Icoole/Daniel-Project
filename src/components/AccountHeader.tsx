import { motion } from "framer-motion";
import { Wallet, Eye, EyeOff, Shield } from "lucide-react";

interface AccountHeaderProps {
  name: string;
  serviceNumber: string;
  rank?: string;
  branch?: string;
  mos?: string;
  isPrivate: boolean;
  onTogglePrivacy: () => void;
}

const AccountHeader = ({ name, serviceNumber, isPrivate, onTogglePrivacy }: AccountHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between w-full mb-10"
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center border-2 border-primary/20 p-3 shadow-lg">
          <Wallet className="w-8 h-8 text-primary" />
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground/70 bg-clip-text text-transparent">
            Hello, {name}
          </p>
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
            SVC# {serviceNumber}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
          <Shield className="w-3.5 h-3.5 text-primary" />
          <span>CAC VERIFIED</span>
        </div>
        <button
          onClick={onTogglePrivacy}
          className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
          style={{ transitionDuration: "150ms" }}
          title={isPrivate ? "Show balances" : "Hide balances"}
        >
          {isPrivate ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
    </motion.div>
  );
};

export default AccountHeader;
