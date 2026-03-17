import { motion } from "framer-motion";
import { Eye, EyeOff, Shield } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

interface AccountHeaderProps {
  name: string;
  rank: string;
  branch: string;
  serviceNumber: string;
  mos: string;
  isPrivate: boolean;
  onTogglePrivacy: () => void;
}

const AccountHeader = ({ name, rank, branch, serviceNumber, mos, isPrivate, onTogglePrivacy }: AccountHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between mb-10"
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={profilePhoto}
            alt="Service member profile"
            className="w-14 h-14 rounded-full object-cover border-2 border-primary/40"
          />
          <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-primary border-2 border-background" />
        </div>
        <div className="space-y-0.5">
          <p className="text-foreground font-semibold text-lg">{name}</p>
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-label">
            {rank} · {branch} · PAY GRADE {rank}
          </p>
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-label">
            SVC# {serviceNumber} · MOS {mos}
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
