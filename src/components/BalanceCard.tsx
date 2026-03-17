import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimatedCounter from "./AnimatedCounter";

interface BalanceCardProps {
  label: string;
  amount: number;
  subtitle?: string;
  benefitActive?: boolean;
  showAction?: boolean;
  actionLabel?: string;
  onAction?: () => void;
  sparklineData?: number[];
}

const MiniSparkline = ({ data }: { data: number[] }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const h = 32;
  const w = 80;
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`)
    .join(" ");

  return (
    <svg width={w} height={h} className="opacity-40">
      <polyline
        points={points}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const BalanceCard = ({
  label,
  amount,
  subtitle,
  benefitActive = false,
  showAction = false,
  actionLabel = "Initiate Transfer",
  onAction,
  sparklineData,
}: BalanceCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={benefitActive ? "card-surface-benefit" : "card-surface"}
      whileHover={{ borderColor: benefitActive ? undefined : "hsl(210, 100%, 50%)" }}
      transition={{ duration: 0.15, ease: [0.2, 0, 0, 1] }}
    >
      <div className="flex justify-between items-start mb-8">
        <span className="text-sm text-muted-foreground uppercase tracking-label font-semibold">
          {label}
        </span>
        <div className="flex items-center gap-3">
          {sparklineData && <MiniSparkline data={sparklineData} />}
          {benefitActive && (
            <div className="h-2 w-2 rounded-full bg-benefit animate-pulse-glow" />
          )}
        </div>
      </div>

      <AnimatedCounter value={amount} className="text-3xl font-semibold" />

      {subtitle && (
        <p className="text-xs text-muted-foreground mt-2">
          {subtitle}
          {benefitActive && (
            <span className="text-benefit font-bold ml-1">(CODE ACTIVE)</span>
          )}
        </p>
      )}

      {showAction && (
        <button
          onClick={() => navigate("/transfer-restricted")}
          className="mt-4 w-full bg-foreground text-background py-2.5 rounded-lg font-semibold text-sm uppercase tracking-tight hover:bg-primary hover:text-primary-foreground transition-colors"
          style={{ transitionDuration: "150ms", transitionTimingFunction: "cubic-bezier(0.2, 0, 0, 1)" }}
        >
          {actionLabel}
        </button>
      )}
    </motion.div>
  );
};

export default BalanceCard;
